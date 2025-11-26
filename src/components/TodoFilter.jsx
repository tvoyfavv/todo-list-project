import { useContext } from 'react';
import { TodoContext, FILTER_STATES } from '../context/Todocontext';

function TodoFilter() {
  const { filter, setFilter } = useContext(TodoContext);

  const getButtonClass = (buttonFilter) => 
    `todo-filter__button ${filter === buttonFilter ? 'todo-filter__button--active' : ''}`;

  return (
    <div className="todo-filter">
      <button
        onClick={() => setFilter(FILTER_STATES.ALL)}
        className={getButtonClass(FILTER_STATES.ALL)}
      >
        Все
      </button>
      <button
        onClick={() => setFilter(FILTER_STATES.ACTIVE)}
        className={getButtonClass(FILTER_STATES.ACTIVE)}
      >
        Активные
      </button>
      <button
        onClick={() => setFilter(FILTER_STATES.COMPLETED)}
        className={getButtonClass(FILTER_STATES.COMPLETED)}
      >
        Выполненные
      </button>
    </div>
  );
}

export default TodoFilter;