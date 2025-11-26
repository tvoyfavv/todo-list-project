

import { useContext } from 'react';
import { TodoContext } from '../context/Todocontext';
import TodoItem from './TodoItem';

function TodoList() {

  const { todos, isLoading, error } = useContext(TodoContext); 

  if (isLoading) {
    return (
      <div className="todo-list__loading">
        ⏳ Загрузка задач...
      </div>
    );
  }

  if (error) {
    return (
      <div className="todo-list__error">
         Ошибка: {error}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="todo-list__empty">
        Нет задач для отображения
      </div>
    );
  }

  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default TodoList;