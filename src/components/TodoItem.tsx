import React, { useState, useCallback } from 'react';
import { useTodo } from '../context/TodoContext';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<{ todo: Todo }> = React.memo(({ todo }) => {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.text);

  const handleEdit = useCallback(() => {
    if (editText.trim()) {
      dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editText.trim() } });
      setIsEditing(false);
    }
  }, [editText, dispatch, todo.id]);

  const handleDelete = useCallback(() => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  const handleToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleEdit} className="save">
            Save
          </button>
        </div>
      ) : (
        <div className="input-group">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
        </div>
      )}
      <div>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="edit">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </li>
  );
});

export default TodoItem;