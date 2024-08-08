import {useState} from 'react'

export default function CategoryDropdown() {
    const [selectedOption, selectedOption] = useState("option1");
    const handleCategoryDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <div className='category-dropdown'>
        <label htmlFor='category'>Select A Category:
            <select id='category' value={selectedOption} onChange={handleCategoryDropdownChange}>
                <option value='option1'>Work</option>
                <option value='option2'>Chore</option>
                <option value='option3'>Social</option>
                <option value='option4'>Personal</option>
            </select>
        </label>
    </div>
  )
}
