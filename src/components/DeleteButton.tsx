import { useNavigate } from "react-router-dom";
import axios from 'axios'

interface DeleteButtonProps {
    task_id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ task_id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/task/delete/${task_id}`);
      alert("Задание успешно удалено");
      navigate("/");
    } catch (error) {
      console.error("Ошибка при удалении задания:", error);
      alert("Ошибка при удалении задания");
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-delete">
      <span>Удалить</span> 
    </button>
  );
};

export default DeleteButton;
