import {useState} from 'react'
import {v4} from 'uuid';

function ContactForm() {
    const [contactFormData, setContactFormData] = useState({name: "", email: "", message: "",});

    const handleChange = (event) => {
        const {name, value } = event.target;
        setContactFormData((prevContactFormData) => ({...prevContactFormData, [name]: value}));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${contactFormData.name}, Email: ${contactFormData.email},Message: ${contactFormData.message}`
        );
    };

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div>Contact Form
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input type="text" id= {v4()} name="name" value={contactFormData.name} onChange={handleChange} required/>

            <label>Email:</label>
            <input type="email" id={v4()} name="email" value={contactFormData.email} onChange={handleChange} required/>

            <label>Message:</label>
            <textarea id={v4()} name="message" value={contactFormData.message} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default ContactForm;
