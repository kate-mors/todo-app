import React from "react";
import classNames from "classnames";

import Badge from "../Badge";
import iconRemove from "../../assets/img/remove.svg";

import './list.scss'

const List = ({ items, isRemovable, onClick, onRemove }) => {
  
  const removeTask = item => {
    if (window.confirm('Do you really want to remove this task?')) {
      onRemove(item);
    }
  }

  return (
    <ul className='list' onClick={onClick}>
      {
        items.map((item, index) => (
          <li key={index} className={classNames(item.className, {active: item.active})}>
            <div>
              {item.icon ? item.icon : <Badge color={item.color} />}
            </div>
            <span>{item.name}</span>
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
