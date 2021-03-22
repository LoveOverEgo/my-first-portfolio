import React, { useState, useEffect } from 'react';
import PhotoHutIMG from '../../assets/images/photohut.png';
import PlanDateNightIMG from '../../assets/images/plan-your-date-night.png';
import RunBuddyIMG from '../../assets/images/run-buddy.png';
import HoriseonIMG from '../../assets/images/horiseon.png';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Photo Hut',
            tech: 'Node.js | MySql | Handlebars | Express',
            description: 'PhotoHut is a community site for professional photographers that uses a comment and voting system.  We use Node.js, with express, handlebars, routes, and mysql for the database. Built in collaboration with a group of student developers attending UCF Boot Camp.',
            liveUrl: 'https://ucf-photo-hut.herokuapp.com/',
            github: 'https://github.com/Azambik/Photo-Hut',
            img: PhotoHutIMG
        },
        {
            name: 'Plan Your Date Night',
            tech: 'HTML | CSS | APIs | JavaScript',
            description: 'This website was built in collaboration with a group of student developers attending UCF Boot Camp. We use HTML, CSS, JavaScript, Jquery, Foundation, and APIs to display recipes for meals and cocktails. The user searches ingredients and is presented with corresponding recipes. The user is also able to store recipes and a shopping list via local storage.',
            liveUrl: 'https://michaeldevelopscode.github.io/plan-your-date-night',
            github: 'https://github.com/MichaelDevelopsCode/plan-your-date-night',
            img: PlanDateNightIMG
        },
        {
            name: 'Run Buddy',
            tech: 'HTML | CSS',
            description: 'This website was built with just HTML and CSS to mock a business site that provides a running trainer.',
            liveUrl: 'https://michaeldevelopscode.github.io/run-buddy/',
            github: 'https://github.com/MichaelDevelopsCode/run-buddy',
            img: RunBuddyIMG
        },
        {
            name: 'Horiseon',
            tech: 'HTML | CSS',
            description: 'This website was built with just HTML and CSS to mock a Marketing Agency site. This project aims to enhance accessibility and optimization for search engines by using semantic HTML elements, logical structure, alt attributes for images, and including a concise title.​​​',
            liveUrl: 'https://michaeldevelopscode.github.io/horiseon-optimal-refactor/',
            github: 'https://github.com/Azambik/horiseon-optimal-refactor',
            img: HoriseonIMG
        }
    ]);

    const [index, setIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(projects[index]);

    // PREV Project btn
    function prevProject() {
        if(index === 0) {
            setIndex(projects.length-1);
        } else {
            setIndex(index - 1);
        }
    }

    //NEXT Project btn
    function nextProject() {
        if(index === (projects.length-1)) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    // use effect to update the projects after clicks
    useEffect(()=> {
        setCurrentProject(projects[index]);
    }, [projects, index, currentProject]);

    return(
        <section id="work" className="sections">
            <div className="slideshowBtn" onClick={prevProject}>
                <i className="fa fa-angle-left fa-2x"></i>
                <span> Prev</span>
            </div>
            <div id="apps" className="applications flex-row">
                <ul className="flex-row">
                    <li className="card">
                        <div className="work-content work1">
                            <div className="content">
                                <img src={currentProject.img} alt="project screenshot" ></img>
                                <div>
                                    <h2>{currentProject.name}</h2>
                                    <h4>{currentProject.tech}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="work-content work2">
                            <div className="content">
                                <div>
                                    <p>{currentProject.description}</p>
                                    {/* Incase Not all projects have live site  */}
                                    {currentProject.liveUrl && <a href={currentProject.liveUrl} target="_blank" rel='noreferrer'>Visit live site</a>}
                                    <a href={currentProject.github} target="_blank" rel='noreferrer'>Visit GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* {projects.map((project, index) => {
                        return(
                        <li className="card" key={index} >
                            <div className="work-content work1">
                                <div className="content">
                                    <img src={project.img} ></img>
                                    <div>
                                        <h2>{project.name}</h2>
                                        <h4>{project.tech}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="work-content work2">
                                <div className="content">
                                    <div>
                                        <p>{project.description}</p>
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank">Visit live site</a>}
                                        <a href={project.github} target="_blank">Visit GitHub Repo</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )
                    })} */}
                </ul>
            </div>
            <div className="slideshowBtn" onClick={nextProject}>
                <span>Next </span>
                <i className="fa fa-angle-right fa-2x"></i>
            </div>
        </section>
    );
}

export default Portfolio;