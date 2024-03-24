import React, { useState, ChangeEvent } from 'react';

const TaskSort: React.FC = () => {
  const [sortType, setSortType] = useState('Новые');

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortType(event.target.value); 
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
