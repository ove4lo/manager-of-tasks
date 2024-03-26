import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard'; 
import { ITask } from '../models/models';
import TaskFilter from '../components/TaskFilter';

import axios from "axios";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]); 

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/"); //запрос на сервер для получения всех карточек
        setTasks(res.data);
      } catch (err) {
        console.log(err); 
      }
    };
    fetchAllTasks();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Список задач</h1>
      <div className="main">
        <div className="task-filter">
          <button className="btn">Добавить задачу</button>
          <TaskFilter />
        </div>
        <div className="task-list">
          {tasks.map((task: ITask) => (
            <TaskCard key={task.id} 
            id={task.id} 
            name={task.name} 
            description={task.description} 
            dateofcreation={task.dateofcreation} 
            priority={task.priority}
            marks={task.marks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
