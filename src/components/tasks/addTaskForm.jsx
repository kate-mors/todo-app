import React, { useState } from 'react';
import axios from 'axios';

import iconClose from '../../assets/img/add.svg';

const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const formVisibleToggle = () => {
    setVisibleForm(!visibleForm);
    setInputValue('');
  }

  const addTask = () => {
    const obj = {
      "listId": list.id,
      "text": inputValue,
      "completed": false
    };
    setIsLoading(true);
    axios
      .post('http://localhost:3001/tasks/', obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        formVisibleToggle();
      })
      .catch(() => {
        alert('error adding task')
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div className="tasks__form-new">
          <button
            type="button"
            className="tasks__add-btn"
            onClick={formVisibleToggle}
          >
            <img src={iconClose} alt="Add task." />
            <span>New Task</span>
          </button>
        </div>
      ) : (
        <div className="tasks__form-block">
            <input
              type="text"
              className="field"
              value={inputValue}
              placeholder="Task title"
              onChange={e => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="button"
              onClick={addTask}
              disabled={isLoading}
            >
              {isLoading ? 'Adding' : 'Add task'}
          </button>
            <button
              type="submit"
              className="button button--clear"
              onClick={formVisibleToggle}
            >
              Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default AddTaskForm;
