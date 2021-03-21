import React from 'react';

function Nav() {

    return(
        <header>
            <h1>Michael Arvelo</h1>
            <nav>
                <ul>
                    <li> <a id="aboutBtn" href="#about">About Me</a></li>
                    <li> <a href="#work">Work</a></li>
                    <li> <a href="#contact">Contact me</a></li>
                    <li> <a href="./assets/images/MichaelArvelo_Resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;