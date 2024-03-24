import React from 'react';
import TaskCard from '../components/TaskCard'; 
import { ITask } from '../models/models';

const tasks: ITask[] = [
  {
    name: 'Task 1',
    description: 'Description for Task 1',
    dateofcreation: new Date(),
    priority: 'high',
    marks: ['important', 'urgent']
  },
  {
    name: 'Task 2',
    description: 'Description for Task 2',
    dateofcreation: new Date(),
    priority: 'medium',
    marks: ['work']
  },
  {
    name: 'Task 3',
    description: 'Description for Task 3',
    dateofcreation: new Date(),
    priority: 'low',
    marks: ['personal']
  }
];

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Список задач</h1>
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
    </div>
  );
};

export default MainPage;
