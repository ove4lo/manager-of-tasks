import React from 'react';
import TaskSort from './TaskSort';
import TaskCheckBox from './TaskCheckBox';

const priorityList = ['low', 'normal', 'high'];
const marksList = ['research', 'design', 'development'];


const TaskFilter: React.FC = () => {
  return (
    <div className="task-filter">
        <h3>Сортировка</h3>
        <TaskSort />
        <h3>Приоритет</h3>
        <TaskCheckBox items={priorityList} />
        <h3>Отметки</h3>
        <TaskCheckBox items={marksList} />
    </div>
  );
};

export default TaskFilter;
