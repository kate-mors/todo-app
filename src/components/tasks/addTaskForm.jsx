import React, { useState } from 'react';
import iconClose from '../../assets/img/add.svg';

const AddTaskForm = () => {
  const [visibleForm, setVisibleForm] = useState(false);

  const formToggle = () => {
    setVisibleForm(!visibleForm);
  }

  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div className="tasks__form-new">
          <button
            type="button"
            className="tasks__add-btn"
            onClick={formToggle}
          >
            <img src={iconClose} alt="Add task." />
          </button>
          <span>New Task</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input type="text" className="field" value="task text" placeholder="Task title" />
          <button type="submit" className="button">
              Add task
          </button>
            <button
              type="submit"
              className="button button--clear"
              onClick={formToggle}
            >
              Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default AddTaskForm;
