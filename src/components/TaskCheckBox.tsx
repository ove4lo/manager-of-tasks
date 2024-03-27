import React, { useState } from 'react';

interface TaskCheckBoxProps {
  items: string[];
  onChange: (selectedMarks: string[]) => void;
}

/*чекбокс для фильрации карточек задач*/
const TaskCheckBox: React.FC<TaskCheckBoxProps> = ({ items, onChange }) => {
  const [selectedMarks, setSelectedMarks] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mark = e.target.value;
    const isChecked = e.target.checked;

    let updatedMarks = [...selectedMarks];
    if (isChecked) {
      updatedMarks.push(mark);
    } else {
      updatedMarks = updatedMarks.filter(item => item !== mark);
    }

    setSelectedMarks(updatedMarks);
    onChange(updatedMarks);
  };


  return (
    <div className="task-checkbox">
      {items.map((item, index) => (
        <label key={index}>
          <input type="checkbox"
            value={item}
            checked={selectedMarks.includes(item)}
            onChange={handleCheckboxChange} />
          {item}
        </label>
      ))}
    </div>
  );
};

export default TaskCheckBox;
