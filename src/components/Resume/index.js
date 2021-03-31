import React from 'react';
import Pdf from '../../assets/images/MichaelArvelo_Resume.pdf';

function Resume() {


    return(
        <section className="contact-form">   
            <div className='container'>
                <div></div> {/* To center card */}
                <a className="card" href={Pdf} target="_blank" rel='noreferrer'>
                    <h3 className="title">View Resume </h3> 
                    <div className="logo">
                        <i className="fas fa-file"></i>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Resume;