import { TodoProvider } from './context/Todocontext';
import TodoForm from './components/TodoForm';
import TodoList from './components/Todolist';
import TodoFilter from './components/TodoFilter';

import './App.css';
import './components/components.css'; 

function App() {
  return (
    <TodoProvider>
      <div className="todo-app-container">
        <h1 className="todo-app-container__title">todo-list</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;