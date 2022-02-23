import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { NewTodo } from './components/NewTodo';
import { Todo, TodoList } from './components/TodoList';
import { delay } from './shared/helper';

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTodos(): Promise<void> {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/todos/1');

        await delay(2000);

        const { response: todoItem } = (await response.json()) as TodoResponse;

        setTodos([todoItem]);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    }

    // eslint-disable-next-line no-void
    void getTodos();
  }, []);

  const addTodo = (text: string): void => {
    const newTodo: Todo = { id: Math.random().toString(), title: text };
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  const removeTodo = useCallback(
    (todoId: string): void => {
      const filtered = todos.filter((todo) => todo.id !== todoId);
      setTodos(filtered);
    },
    [todos],
  );

  const renderTodoList = useMemo(() => {
    if (!isLoading) {
      return <TodoList items={todos} removeTodo={removeTodo} />;
    }

    return (
      <div className="wrapper">
        <div className="loading"> Is loading ...</div>
      </div>
    );
  }, [isLoading, removeTodo, todos]);

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      {renderTodoList}
    </div>
  );
}

export default App;

type TodoResponse = {
  response: Todo;
};
