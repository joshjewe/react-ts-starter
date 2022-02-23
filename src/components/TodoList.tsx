import './TodoList.css';

import React from 'react';

export interface Todo {
  id: string;
  title: string;
}

interface TodoListProps {
  items: Todo[];
  removeTodo: (id: string) => void;
}

export function TodoList({ items, removeTodo }: TodoListProps): JSX.Element {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span> {todo.title} </span>
          <button type="button" onClick={() => removeTodo(todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
