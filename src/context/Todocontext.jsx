import { createContext, useState, useEffect, useMemo, useCallback } from 'react';

import * as api from '../api/fakeInMemoryApi.js'; 

const TodoContext = createContext();

export const FILTER_STATES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]); 
  const [filter, setFilter] = useState(FILTER_STATES.ALL);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

 

  const fetchTodos = useCallback(async (currentFilter) => {
    setIsLoading(true);
    setError(null);
    try {
     
      const data = await api.getTodos(currentFilter);
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
      setError("Не удалось загрузить задачи.");
    } finally {
      setIsLoading(false);
    }
  }, []); 

 
  useEffect(() => {
    fetchTodos(filter);
  }, [filter, fetchTodos]); 


  const addTodo = useCallback(async (text) => {
    const trimmedText = text.trim();
    if (trimmedText === '') return;
    
    setIsLoading(true);
    setError(null);
    try {
      await api.addTodo(trimmedText);
      
      await fetchTodos(filter); 
    } catch (err) {
      console.error("Failed to add todo:", err);
      setError("Не удалось добавить задачу.");
      setIsLoading(false);
    }
  }, [filter, fetchTodos]); 


  const toggleTodo = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.toggleTodo(id);
      
      await fetchTodos(filter); 
    } catch (err) {
      console.error("Failed to toggle todo:", err);
      setError("Не удалось изменить статус задачи.");
      setIsLoading(false);
    } 
  }, [filter, fetchTodos]);

 
  const deleteTodo = useCallback(async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.deleteTodo(id); 
      
      await fetchTodos(filter);
    } catch (err) {
      console.error("Failed to delete todo:", err);
      setError("Не удалось удалить задачу.");
      setIsLoading(false);
    } 
  }, [filter, fetchTodos]);

  
  const filteredTodos = todos; 

  const value = useMemo(() => ({
   
    todos: filteredTodos,
    filter,
    isLoading,
    error, 
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
  }), [filteredTodos, filter, isLoading, error, addTodo, toggleTodo, deleteTodo]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };