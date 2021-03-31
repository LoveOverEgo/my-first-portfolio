import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             if (!e.target.value.length) {
    //               setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //               setErrorMessage('');
    //             }
    //         }
    //     }

    //     if (e.target.name === 'message') {
    //         if (e.target.value === '') {
    //             setErrorMessage('Text is required');
    //         } 
    //     }
    
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    // }

    return(
        <section className="contact-form">   
            <h1 >Let's connect!</h1>
            <div className="container">
                <a className="card" href="https://github.com/MichaelDevelopsCode" target="_blank" rel='noreferrer'>
                    <h3 className="title">
                        GitHub
                    </h3>
                    <div className='logo' >
                        <i className="fab fa-github"></i>
                    </div>
                </a>
                <a className="card" href="https://www.linkedin.com/in/michael-arvelo-169925148/" target="_blank" rel='noreferrer'>
                    <h3 className="title">
                        LinkedIn
                    </h3>
                    <div className='logo' >
                        <i className="fab fa-linkedin"></i>
                    </div>
                </a>
                <a className="card" href="https://stackoverflow.com/users/13529182/michael-arvelo" target="_blank" rel='noreferrer'>
                    <h3 className="title">
                        StackOverFlow
                    </h3>
                    <div className='logo' >
                        <i className="fab fa-stack-overflow"></i>
                    </div>
                </a>
                <a className="card" href='mailto:michaeldevelopscode@gmail.com'>
                    <h3 className="title">
                        MichaelDevelopsCode@gmail.com
                    </h3>
                    <div className='logo' >
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                </a>
                <a className="card" href="tel:+1-407-963-2618">
                  <h3 className="title">
                        +1-407-963-2618
                  </h3>
                  <div className='logo' >
                      <i className="fas fa-phone"></i>
                  </div>
                </a>
            </div>
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                <button type="submit">Submit</button>
            </form> */}
        </section>
    );
}

export default ContactForm;