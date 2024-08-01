import React, {useState} from 'react'
import TodoList from './TodoList'


const TodoForm = () => {
    const [input, setInput] = useState(
        {
            description: '',
            category: '',
            priority: ''
        })

    const handleChange = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(input))
    }

    const content = (
        <TodoForm className='form flex-col' onSubmit={handleSubmit}>

            <h2>Todo Info</h2>

            <TodoList data={data} handleChange={handleChange}/>

            <button className='button'>Submit</button>
        </TodoForm>
    )
    return (
        <div>TodoForm</div>
    )
} 

export default TodoForm