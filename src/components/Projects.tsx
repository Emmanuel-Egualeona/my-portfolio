import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'MLSCN Website Revamp',
        category: 'UI/UX & Frontend',
        description: 'Led frontend rebuild and UI/UX improvements for the Medical Laboratory Science Council of Nigeria during my industrial training. Enhanced visual identity, accessibility standards, and overall site performance.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'Student Expense Tracker',
        category: 'Full-Stack Application',
        description: 'Built a complete expense management system with PostgreSQL backend and React frontend. Features include transaction management, mobile-responsive views, PDF export, and upcoming AI-powered expense analysis with email scanning.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Vite'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'Driver Tracking System',
        category: 'Enterprise Solution',
        description: 'Developed an in-house tracking application for managing drivers, deliveries, and movement logs. Streamlined logistics operations with real-time updates and comprehensive reporting.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
        tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'AgroCraft E-Commerce',
        category: 'UI Redesign',
        description: 'Redesigned multiple pages for an agricultural e-commerce platform. Improved user flow, modernized the interface, and enhanced the overall shopping experience with better navigation and visual hierarchy.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tech: ['React', 'Tailwind CSS', 'Figma'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'Traffic Simulation',
        category: 'Python Project',
        description: 'Created a multi-car traffic simulation using Python and Pygame. Features include traffic light systems, vehicle turning mechanics, and expandable simulation parameters for testing traffic flow scenarios.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
        tech: ['Python', 'Pygame', 'OOP'],
        links: { demo: '#', repo: '#' }
    }
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-8 md:mb-12 lg:mb-16"
            >
                SELECTED <br /> WORK
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16">
                {projects.map((project, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-swiss-red transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.links.repo} className="hover:text-swiss-red" aria-label="View repository"><Github size={20} /></a>
                                <a href={project.links.demo} className="hover:text-swiss-red" aria-label="View demo"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p className="text-sm font-medium text-swiss-red uppercase tracking-widest mb-2">
                            {project.category}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
