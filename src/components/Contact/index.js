import React from 'react';

function ContactForm() {
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
        </section>
    );
}

export default ContactForm;