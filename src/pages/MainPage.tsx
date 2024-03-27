import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import { ITask } from '../models/models';
import TaskFilter from '../components/TaskFilter';
import axios from "axios";
import GoButton from '../components/GoButton';

const MainPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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

  const handleSortChange = async (sortType: string) => {
    try {
      const res = await axios.get(`http://localhost:3001/sort?sort=${sortType}`); // запрос на сервер для сортировки задач
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="container">
      <h1 className="title">Список задач</h1>
      <div className="main">
        <div className="task-filter">
          <GoButton text="Добавить задачу" nav="/add" />
          <TaskFilter onSortChange={handleSortChange} />
        </div>
        <div className="task-list">
          {tasks.map((task: ITask, index) => (
            <TaskCard key={index}
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
