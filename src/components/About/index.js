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
                        <p>Full-Stack Web Developer that loves continuous learning, connecting, and collaborating with others. Over 3 years of experience learning web development, collaboration, problem solving and developed quality skills ranging from Backend to Frontend (HTML, JS, CSS, React.js, Node, SQL, Databases, and more). Diving into my passion I graduated from University of Central Florida coding bootcamp and received my Full-stack web development Certificate.</p>
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