import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt="Project" />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <GithubIcon />
        </div>
    )
}

export default ProjectDisplay;