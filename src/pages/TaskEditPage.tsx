import { ITask } from "../models/models";

/*деталь задачи*/
const TaskEditPage: React.FC = () => { 
    return (
        <div className='container'> 
            <h3>Название</h3>
            <p>Дата создания: </p> 
            <p>Приоритет: </p>
            <p className="marks">
                Отметки:
            </p>
            <p>Описание: </p> 
        </div>
    )
}

export default TaskEditPage;