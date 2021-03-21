import React from 'react';
import ProfilePic from '../../assets/images/profile.JPG';

import ToggleTheme from '../ToggleTheme';

function About() {

    return(
        <section id="about" class="cover">
            <ToggleTheme />
            <div class="profilePic">
                <div>
                    <img src={ProfilePic} alt="profile picture" title="Michael's picture 2020" />
                </div>
            </div>
            <div class="intro">
                <h1>Michael Arvelo</h1>
                <h1>Full-Stack Web Developer</h1>
            </div>
            <div class="info">
                <div class="bio">
                    <p>I am a passionate developer and enjoy putting my all into my work. I love learning new programming languages and frameworks, always improving what I already know, and putting my skills to the test!</p>
                    <i class="fa fa-info fa-1x infoBtn"></i>
                </div>
                <div class="social-icons">
                    <a href="https://stackoverflow.com/users/13529182/michael-arvelo" target="_blank" title="Stack OverFlow">
                        <i class="fab fa-stack-overflow"></i>
                    </a>
                    <a href="https://github.com/MichaelDevelopsCode" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-arvelo-169925148/" target="_blank" title="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/MichaelDevsCode" target="_blank" title="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
                <i class="fa fa-angle-down fa-2x infoBtn"></i>
                <h4>About Me</h4>

            </div>
        </section>
    )
};

export default About;