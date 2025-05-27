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
    </div>
  );
};

export default TodoForm;