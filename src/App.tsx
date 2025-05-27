import React from 'react';
import TodoForm from './components/TodoForm';
import { useTodo } from './context/TodoContext';

const App: React.FC = () => {
  const { state } = useTodo();

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;