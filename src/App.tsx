import React from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useTodo } from './context/TodoContext';

const App: React.FC = () => {
  const { state } = useTodo();

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;