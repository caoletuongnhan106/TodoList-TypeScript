import React, { useMemo } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useTodo } from './context/TodoContext';

const App: React.FC = () => {
  const { state } = useTodo();

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }, [state.todos, state.searchTerm]);

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;