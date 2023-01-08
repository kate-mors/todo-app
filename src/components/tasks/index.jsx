import React from "react";
import axios from "axios";
import iconEdit from '../../assets/img/edit.svg';
import iconClose from '../../assets/img/add.svg';
import AddTaskForm from "./addTaskForm";

import './tasks.scss';

const Tasks = ({ list, onEditTitle, onAddTask }) => {
  
  const editTitle = () => {
    const newTitle = window.prompt('List title', list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle)
      axios
        .patch('http://localhost:3001/lists/' + list.id, {
          name: newTitle
        })
        .catch(() => {
          alert("Couldn't update the list name")
        });
    }
  }

  return (
    <div className='tasks'>
      <button className='tasks__title'>
        <h2>{list.name}</h2>
        <img src={iconEdit} onClick={editTitle} alt="Edit task title."/>
      </button>
      <div className="tasks__items">
        {!list.tasks.length && <h2>No tasks</h2>}
        {list.tasks.map(task => (
          <div key={task.id} className="tasks__items-row">
            <div className="checkbox">
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`} >
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </label>
            </div>
            <p className="tasks__items-text">{task.text}</p>
            <button
              type="button"
              className="tasks__remove-btn">
              <img src={iconClose} alt="Remove task." />
            </button>
          </div>
        ))}
        <AddTaskForm list={list} onAddTask={onAddTask} />
      </div>
    </div>
  )
}

export default Tasks;