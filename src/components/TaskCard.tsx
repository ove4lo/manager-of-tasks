import { Link, NavLink } from "react-router-dom";
import { ITask } from "../models/models";

/*карточка задачи*/
const TaskCard: React.FC<ITask> = ({id, name, description, dateofcreation, priority, marks }) => {

    const formattedDate = new Date(dateofcreation).toLocaleDateString();
    return (
        <Link to={`/task/${id}`} className='task nav-link'>
             <div >
            <h3>{name}</h3>
            <p>Дата создания: {formattedDate}</p>
            <p>Приоритет: {priority}</p>
            <p className="marks">
                {marks.length > 0 ? (
                    <>Отметки: {marks.map((mark, index) => (
                        <span className="mark" key={index}>{mark}</span>
                    ))}</>
                ) : (
                    "Отметок нет"
                )}
            </p>

            <p className="description">Описание: {description}</p>
        </div>
        </Link>
       
    )
}

export default TaskCard;