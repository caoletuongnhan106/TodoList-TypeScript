import React, { useState, useCallback } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoForm: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const { dispatch } = useTodo();

  const handleAddTodo = useCallback(() => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input.trim() });
      setInput('');
    }
  }, [input, dispatch]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
    },
    [dispatch]
  );

  return (
    <div className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search todos"
        className="search-input"
      />
    </div>
  );
};

export default TodoForm;