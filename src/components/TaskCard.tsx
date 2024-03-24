import { ITask } from "../models/models";

const TaskCard: React.FC<ITask> = ({ name, description, dateofcreation, priority, marks}) => {
    return (
        <div className='task'>
            <h3>{name}</h3>
            <p>Дата создания: {dateofcreation.toDateString()}</p>
            <p>Приоритет: {priority}</p>
            <p className="marks">Отметки: {marks}</p>
            <p className="description">Описание: {description}</p> 
        </div>
    )
}

export default TaskCard;