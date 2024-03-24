import React from 'react';

interface TaskCheckBoxProps {
  items: string[]; 
}

const TaskCheckBox: React.FC<TaskCheckBoxProps> = ({ items }) => {
  return (
    <div className="task-checkbox">
      {items.map((item, index) => (
        <label key={index}>
          <input type="checkbox" value={item} />
          {item}
        </label>
      ))}
    </div>
  );
};

export default TaskCheckBox;
