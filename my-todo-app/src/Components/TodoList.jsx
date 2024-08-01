import React, {useState} from 'react';
import TodoCard from './TodoCard';
import {v4} from 'uuid';

function TodoList(props) {
        const [tasks, setTasks] = useState([{
        id: v4(),
        description: "Task 1",
        category: "Category 1",
        priority: "High",
        completed: true
    }, 
    
    {
        id: v4(),
        description: "Task 2",
        category: "Category 2",
        priority: "Medium",
        completed: false
    }]);
        const [data, setData] = useState('');
    function addTask(data) {
        const newTask = {
            id: v4(),
            data,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setData('');
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
        <input value={data} 
        onSubmit={e => setData(e.target.value)}/>
        <button onSubmit={() => addTask(data)}>Add</button>
    </div>
    );
}

export default TodoList;