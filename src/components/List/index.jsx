import React from "react";
import classNames from "classnames";

import Badge from "../Badge";

import './list.scss'

const List = ({items, isRemovable, onClick }) => {
  return (
    <ul className='list' onClick={onClick}>
      {
        items.map((item, index) => (
          <li key={index} className={classNames(item.className, {active: item.active})}>
            <div>
              {item.icon ? item.icon : <Badge color={item.color} />}
            </div>
            <span>{item.name}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default List
