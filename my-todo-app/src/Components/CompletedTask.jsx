import {useState} from 'react'

export default function CompletedCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

  return (
    <div className='Completed-task'>
        <label htmlFor="task">
            <input type="checkbox" name="task" checked={isChecked} onChange={handleChange}/>
        </label>    
    </div>
  )
}
