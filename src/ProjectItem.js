import React from 'react';

function ProjectItem(props) {
    const { name, description, status } = props.project;

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Status: {status}</p>
        </div>
    );
}

export default ProjectItem;
