import React from "react";
import iconEdit from '../../assets/img/edit.svg';
import iconClose from '../../assets/img/add.svg';

import './tasks.scss'

const Tasks = () => {
  return (
    <div className='tasks'>
      <button className='tasks__title'>
        <h2>Frontend</h2>
        <img src={iconEdit} alt="Edit task title."/>
      </button>
      <div className="tasks__items">
        <div className="tasks__items-row">
          <div className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </label>
          </div>
          <p className="tasks__items-text">ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
          <button
            type="button"
            className="tasks__remove-btn">
            <img src={iconClose} alt="Remove task." />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tasks;