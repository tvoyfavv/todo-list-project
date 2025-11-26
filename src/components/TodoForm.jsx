import { useState, useContext } from 'react';
import { TodoContext } from '../context/Todocontext';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useContext(TodoContext);  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите новую задачу..."
        className="todo-form__input"
      />
      <button type="submit" className="todo-form__button">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;