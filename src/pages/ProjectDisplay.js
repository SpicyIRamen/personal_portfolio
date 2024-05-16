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
            <div className="image-gallery">
                {project.image.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`project-${index}`} />
                ))}
            </div>
            {project.video && (
                <video controls>
                    <source src={project.video} type="video/mp4" />
                </video>
            )}
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <GithubIcon />
        </div>
    );
}

export default ProjectDisplay;
