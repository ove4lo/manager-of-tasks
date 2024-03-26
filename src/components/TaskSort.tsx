import React, { useState, ChangeEvent } from 'react';

interface TaskSortProps {
  onSortChange: (sortType: string) => void;
}

/*сортировка карточек задач*/
const TaskSort: React.FC<TaskSortProps> = ({ onSortChange }) => {
  const [sortType, setSortType] = useState('Новые');

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSortChange(event.target.value); 
  };

  return (
    <div className="task-sort">
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="Новые"
            checked={sortType === 'Новые'}
            onChange={handleSortChange}
          />
          Новые
        </label>
        <label>
          <input
            type="radio"
            value="Старые"
            checked={sortType === 'Старые'}
            onChange={handleSortChange}
          />
          Старые
        </label>
      </div>
    </div>
  );
};

export default TaskSort;
