import { useContext } from 'react';
import { TodoContext } from '../context/Todocontext';

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  const handleToggle = () => toggleTodo(todo.id);
  const handleDelete = () => deleteTodo(todo.id);

  const itemClassName = `todo-item ${todo.completed ? 'todo-item--completed' : ''}`;
  const textClassName = `todo-item__text ${todo.completed ? 'todo-item__text--completed' : ''}`;

  return (
    <div className={itemClassName}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-item__checkbox"
      />
      <span className={textClassName}>
        {todo.text}
      </span>
      <button
        onClick={handleDelete}
        className="todo-item__delete-button"
      >
        Удалить
      </button>
    </div>
  );
}

export default TodoItem;