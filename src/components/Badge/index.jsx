import React from 'react';
import classNames from 'classnames';
import './badge.scss';

const Badge = ({ color, onClick, className }) => {
  return (
    <div onClick={onClick} className={classNames('badge', { [`badge--${color}`]: color }, className)}>
    </div>
  )
}

export default Badge;
