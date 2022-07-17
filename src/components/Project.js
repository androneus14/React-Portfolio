import React from 'react';
import projects from '../projects.json';

export default function Project() {
    return(
        <div className='card'>
            <img
                className='card-image'
                src={require(`../assets/images/${projects.image}`).default}
                key={projects.title}
            />
            <div className='card-body'>
                <h3 className='card-title'>
                    <a href={projects.deployedLink}>{projects.title}</a>
                </h3>
                <p >{projects.description}</p>
                <a href={projects.githubLink}>GitHub Repo</a>
            </div>
        </div>
    )
}