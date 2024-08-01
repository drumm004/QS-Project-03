import React from 'react';
import'./todoCard.css';

function TodoCard({task, deleatTask, toggleCompleted}) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-card">
      <input type="checkbox" 
        checked={task.completed} 
        onChange={handleChange} />
      <p>{task.title}</p>
      <button onClick={() => deleatTask(task.id)}>X</button>
    </div>
  );
}

export default TodoCard;