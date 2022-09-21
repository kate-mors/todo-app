import React, {useState} from "react";
import List from '../List';
import Badge from "../Badge";
import closeSvg from "../../assets/img/close.svg";

import './addNewTask.scss';

const AddNewTask = ({colors}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id)

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
            onClick={() => setOpenPopup(!openPopup)}>
            <img src={closeSvg} alt="Close button" />
          </button>
          <input type="text" className="field" placeholder="List name" />
          <div className="add-new-task__colors">
            {colors.map(color =>
              <Badge
                onClick={() => setSelectedColor(color.id)}
                color={color.name}
                key={color.hex}
                className={selectedColor === color.id && 'active'} />)}
          </div>
          <button type="submit" className="button">Add task</button>
        </div>
      )}
    </div>
  )
}

export default AddNewTask