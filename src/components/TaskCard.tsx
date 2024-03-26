import { ITask } from "../models/models";

/*карточка задачи*/
const TaskCard: React.FC<ITask> = ({ name, description, dateofcreation, priority, marks }) => { 

    const formattedDate = new Date(dateofcreation).toLocaleDateString();
    return (
        <div className='task'> 
            <h3>{name}</h3>
            <p>Дата создания: {formattedDate}</p> 
            <p>Приоритет: {priority}</p>
            <p className="marks">
                Отметки:
                {marks.map((mark, index) => (
                    <span key={index}>{mark}</span>
                ))}
            </p>
            <p className="description">Описание: {description}</p> 
        </div>
    )
}

export default TaskCard;