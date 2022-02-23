import './NewTodo.css';

import React, { useRef } from 'react';

type NewTodoIn = {
  addTodo: (text: string) => void;
};

export function NewTodo({ addTodo }: NewTodoIn): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    addTodo(enteredText);
  };

  return (
    <form>
      <div>
        <label htmlFor="todo-text">
          Todo Text
          <input type="text" id="todo-text" ref={textInputRef} />
        </label>
      </div>
      <button type="button" onClick={todoSubmit}>
        ADD TODO
      </button>
    </form>
  );
}
