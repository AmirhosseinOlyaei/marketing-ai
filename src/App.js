import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import './AllProjects.css';

function AllProjects() {

    const [projects, setProjects] = useState([
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet",
            status: "In progress"
        },
        {
            name: "Project 2",
            description: "Consectetur adipiscing elit",
            status: "Completed"
        },
        // Add more projects as needed
    ]);

    return (
        <div className="all-projects-container">
            <h1 className="text-3xl font-bold text-center my-8">All Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project.name} className="shadow-lg rounded-lg bg-white fantasy-border hover:fantasy-border-0 hover:shadow-2xl transition-all duration-300">
                        <ProjectItem project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProjects;
