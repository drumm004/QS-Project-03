import React, {useState} from 'react'
import TodoCard from './TodoCard';
import {v4} from 'uuid';

function TodoList() {
        const [tasks, setTasks] = useState([{
        id: v4(),
        description: "Task 1",
        category: "Category 1",
        priority: "High",
        period: "Mornings",
        completed: true
    }, 
    
    {
        id: v4(),
        description: "Task 2",
        category: "Category 2",
        priority: "Medium",
        period: "Afternoons",
        completed: false
    }]);
        const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: v4(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleatTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed:!task.completed};
            } else {
                return task;
            }
    }));
    }
    return (
    <div className="todo-list">
        {tasks.map(task => (
           <TodoCard
            key={task.id}
            task={task}
            deleteTask={deleatTask}
            toggleCompleted={toggleCompleted}/> 
        ))}
        <input value={text} 
        onChange={e => setText(e.target.value)}/>
        <button onClick={() => addTask(text)}>Add</button>
    </div>
    );
}

export default TodoList;