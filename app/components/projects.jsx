"use client"

import React from 'react'
import ProjectCard from './projectCard.jsx'
import { projects } from '../data/projects.js'

function Projects() {
    return (
        <div className="px-8 py-6">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="col-span-1">
                        <ProjectCard onClick={() => window.open(project.githubLink || "https://github.com/shohaibmk", '_blank')} project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
