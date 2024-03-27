import { useNavigate } from "react-router-dom";

interface GoButtonProps {
  text: string;
  nav: string;
}

const GoButton: React.FC<GoButtonProps> = ({ text, nav }) => {
  const navigate = useNavigate();

  const goNew = () => {
    navigate(nav); 
  };

  return (
    <button onClick={goNew} className="btn">
      <span>{text}</span> 
    </button>
  );
};

export default GoButton;
