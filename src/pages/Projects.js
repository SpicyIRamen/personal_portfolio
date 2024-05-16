import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import '../styles/Project.css';

function Projects() {
    return (
        <div className="projects">
            <h1 className="projectTitle">Hobby Projects</h1>
            <div className="projectList">
                {projectList.map((project, index) => (
                    <ProjectItem
                        key={index}
                        id={index}
                        name={project.name}
                        image={project.image[0]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
