import React, {useState} from "react";
import List from '../List';
import Badge from "../Badge";
import closeSvg from "../../assets/img/close.svg";

import './addNewTask.scss';

const AddNewTask = ({colors, onAdd}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => {
    setOpenPopup(false);
    setInputValue('');
    setSelectedColor(colors[0].id);
  }

  const addTask = () => {
    if (!inputValue) {
      alert('Add task name');
      return;
    }

    const color = colors.filter(c => c.id === selectedColor)[0].name;

    onAdd({
      "id": Math.random(),
      "name": inputValue,
      "color": color
    });
    onClose();
  }

  return (
    <div className="add-new-task">
      <List
        onClick={() => setOpenPopup(!openPopup)}
        items={[
          {
            className: 'list__add-task',
            icon: (
              <svg
                width='12'
                height='12'
                className='icon icon--plus'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 1V11'
                  stroke='#868686'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 6H11'
                  stroke='#868686'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: 'Add task',
          },
        ]}
      />
      {openPopup && (
        <div className="add-new-task__popup">
          <button
            type="button"
            className="add-new-task__close-btn"
            onClick={onClose}>
            <img src={closeSvg} alt="Close button" />
          </button>
          <input type="text" className="field" value={inputValue} placeholder="List name" onChange={e => setInputValue(e.target.value)} />
          <div className="add-new-task__colors">
            {colors.map(color =>
              <Badge
                onClick={() => setSelectedColor(color.id)}
                color={color.name}
                key={color.hex}
                className={selectedColor === color.id && 'active'} />)}
          </div>
          <button type="submit" className="button" onClick={ addTask }>Add task</button>
        </div>
      )}
    </div>
  )
}

export default AddNewTask