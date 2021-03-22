import React from 'react';
import Pdf from '../../assets/images/MichaelArvelo_Resume.pdf';

function Resume() {


    return(
        <div className='resume-link'>
            <h1>
                <a href={Pdf} target="_blank" rel='noreferrer'>View Resume </a> 
                <i class="fas fa-file"></i>
            </h1>
        </div>
    );
}

export default Resume;