import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade'

let pr1Arr = ["NodeJS", "React", "Stylus", "HTML5", "FlexBox"];
let pr2Arr = ["NodeJS", "React", "Stylus", "HTML5", "CSSGrid"];
let pr3arr = ["NodeJS", "Discord.js"];

class Projects extends Component {
    render() {
        const data =[{"name":pr1Arr},{"name":pr2Arr}];
        const Projects = data.map((d) => {
            return (
                <div className="tags">
                    {d.name.map((elem,idx) => {
                        return (<span key={idx}> {elem} </span>)
                    })}
                </div>
            )
        });
        return(
            <div id="projects">
                <Fade>
                <h1 className="pp"> Personal Projects </h1>
                <div className="projectContainer">
                    <ProjectCard
                        title="CunyClasses"
                        description="Revamped interface for cuny class search"
                        image="http://www2.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/communications-marketing/services/marketing/downloads/cuny-name-logo.jpg"
                        card="CC"
                        media="CCmed"
                        className="card"
                        tags={Projects[0]}
                    />
                    <ProjectCard
                        title="miguelacero.github.io"
                        description="Personal Portfolio"
                        image=""
                        card="miguelPort"
                        media="persPort"
                        className="card"
                        tags={Projects[1]}
                    />
                    <ProjectCard
                        title="Coconut Bot"
                        description="A discord bot created using node.js with a bunch of random features"
                        image=""
                        card="miguelPort"
                        media="persPort"
                        className="card"
                        tags={Projects[2]}
                    />
                </div>
                <h2 className="pp"> School Projects </h2>
                </Fade> 
            </div> 
        )
    }
}

export default Projects;