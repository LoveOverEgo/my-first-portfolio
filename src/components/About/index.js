import React, { useState } from 'react';
import ToggleTheme from '../ToggleTheme';
import ProfilePic from '../../assets/images/profile.png';

function About() {
    const [infoStatus, setInfoStatus] = useState(true);

    return(
        <section id="about" className="cover">
            <ToggleTheme />
            <img className="profilePic" src={ProfilePic} alt="profile" title="Michael's picture 2020" />
            <div className="bio-wrapper">
                <div className="intro">
                    <h1>Michael Arvelo</h1>
                    <h1>Full-Stack Web Developer</h1>
                </div>
                <div className={infoStatus ? 'info active' : 'info'}>
                    <div className="bio">
                        <p>I am a passionate developer and enjoy putting my all into my work. I love learning new programming languages and frameworks, always improving what I already know, and putting my skills to the test!</p>
                        <i className="fa fa-info fa-1x infoBtn" onClick={() => {setInfoStatus(!infoStatus)}}></i>
                    </div>
                    <i className="fa fa-angle-down fa-2x infoBtn" onClick={() => {setInfoStatus(!infoStatus)}}></i>
                    <h4>About Me</h4>
                </div>
            </div>
        </section>
    )
};

export default About;