"use client"
import React from 'react';
import ProjectLayout from './ProjectLayout';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 1.5,
        }
    }
}

const ProjectList = ({projects}) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className='justify-center items-center grid lg:grid-cols-3 md:grid-cols-2 gap-12'>
            {projects.map((project) => {
                return <ProjectLayout key={project.id} {...project} />
            })}
        </motion.div>
    )
}

export default ProjectList