import React from 'react';
import TaskCard from '../components/TaskCard'; 
import { ITask } from '../models/models';
import TaskFilter from '../components/TaskFilter';

/*главная страница*/
const tasks: ITask[] = [
  {
    name: 'Task 1',
    description: 'Description for Task 1 fkkggggggggggggggggggggggggggggggggggg gggggggggggggggggggggggggggggg gggggggggggggggggggggggggggggg ggggggggggggggg gggggggggggggggggggggggggg ggggggggggggg ggggggggggg gggggggggggggggggggg gggggggggggggggggggggggggggggggggg gggggggggggggggggggggggggggggggggggggg ggggggggggggggggggggggggggggggggggggggggggggggg gggggggggggg gggggggggggggggggggggggggggggggg ggggggggggggggggggggggggggggggggggggg',
    dateofcreation: new Date(),  
    priority: 'high',
    marks: ['important', 'urgent']
  },
  {
    name: 'Task 2',
    description: 'Description for Task 2',
    dateofcreation: new Date(),
    priority: 'medium',
    marks: []
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
          <div className="main">
            <div className="task-filter">
            <button className="btn">Добавить задачу</button>
              <TaskFilter />
            </div>
            <div className="task-list">
              {tasks.map((task, index) => (
                <TaskCard key={index} {...task} />
              ))}
            </div>
          </div>
        </div>
      );
};

export default MainPage;
