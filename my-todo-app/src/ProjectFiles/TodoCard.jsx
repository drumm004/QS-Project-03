import React from 'react';
import'./TodoCard.css';

function TodoCard({des, cat, pri, per}) {
  return (
    <div className="todo-card">
        <div className="card-des">Description: {des}</div>
        <div className="card-cat">Catigory: {cat}</div>
        <div className="card-pri">Priority: {pri}</div>
        <div className="card-per">Period: {per}</div>
    </div>
  )
}

export default TodoCard;