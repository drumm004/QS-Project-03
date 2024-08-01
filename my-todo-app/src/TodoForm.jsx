import React, {useState} from 'react';
import TodoList from './Components/TodoList';

function TodoForm({ addTodoLog }) {

    const [data, setData] = useState(
        {
            description: '',
            category: '',
            priority: ''
        })

    const handleChange = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    
       
    
    return (
        <div>TodoForm
             <TodoForm className='form flex-col' onSubmit={handleChange}>

                <h2>Todo Info</h2>

                <TodoList data={data} handleChange={handleChange}/>

                <button className='button'>Submit</button>
            </TodoForm>
        </div>
    )
} 

export default TodoForm