import React from "react";
import classNames from "classnames";
import axios from 'axios';

import Badge from "../Badge";
import iconRemove from "../../assets/img/remove.svg";

import './list.scss'

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {
  
  const removeTask = item => {
    if (window.confirm('Do you really want to remove this task?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id)
      })
    }
  }

  return (
    <ul className='list' onClick={onClick}>
      {
        items.map((item, index) => (
          <li
            key={index}
            className={classNames(item.className, { active: activeItem && activeItem.id === item.id })}
            onClick={onClickItem ? () => onClickItem(item) : null}
          >
            <div>
              {item.icon ? item.icon : <Badge color={item.color.name} />}
            </div>
            <span>
              {item.name}
              {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
            </span>
            {isRemovable && <button onClick={() => removeTask(item)}>
              <img src={iconRemove} alt="Remove task." />
            </button>}
          </li>
        ))
      }
    </ul>
  )
}

export default List
