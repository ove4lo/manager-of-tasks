import GoButton from "../components/GoButton";
import TaskForm from "../components/TaskForm";
import { ITask } from "../models/models";

/*создание задачи*/
const TaskCreatePage: React.FC = () => {
    const handleTaskAdded = (newTask: ITask) => {
        console.log('Новая задача:', newTask);
    };


    return (
        <div className='container'>
            <h1 className="title">Создание задачи</h1>
            <GoButton text="&#8592; Назад" nav="/"/>
             <TaskForm onTaskAdded={handleTaskAdded} />
        </div>
    )
}

export default TaskCreatePage;