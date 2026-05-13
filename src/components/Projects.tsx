import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import topmindImage from '../assets/Topmindfans.png';
import zubbyImage from '../assets/zubby.png';
import mlscnImage from '../assets/mlscn.png';
const projects = [
    {
        title: 'MLSCN Website Revamp',
        category: 'Business Website',
        description: 'Led the rebuild of the Medical Laboratory Science Council of Nigeria website to improve trust, clarity, and lead generation. The redesign strengthened their brand presence and made it easier for visitors to take action.',
        image: mlscnImage,
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        links: { demo: 'https://www.mlscn.gov.ng/', repo: '#' }
    },
    {
        title: 'Zubby Power Energy Ventures',
        category: 'Diesel Delivery Company',
        description: 'Created a website for Zubby Power Energy Ventures, a diesel delivery company in Abuja, to streamline delivery operations, improve business visibility, and reduce manual tracking overhead for logistics teams.',
        image: zubbyImage,
        tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        links: { demo: 'https://zubbypowerenergyventures.com.ng/', repo: '#' }
    },
    {
        title: 'TopmindFans E-Commerce',
        category: 'Sales Experience',
        description: 'Redesigned the TopmindFans website to improve product discovery, simplify checkout flows, and increase shopper confidence. The site showcases premium branded hand fans for business promotion and event souvenirs, with over 100,000 fans delivered worldwide.',
        image: topmindImage,
        tech: ['React', 'Tailwind CSS', 'Figma'],
        links: { demo: 'https://topmindfans.com.ng/', repo: '#' }
    },
        {
        title: 'Student Expense Tracker',
        category: 'Growth Tool',
        description: 'Built a full-stack finance app that helps users manage expenses effectively while creating a foundation for future conversion features and analytics-driven insights.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Vite'],
        links: { demo: '#', repo: '#' }
    },

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
                        <a
                            href={project.links.demo !== '#' ? project.links.demo : '#'}
                            target={project.links.demo !== '#' ? '_blank' : undefined}
                            rel={project.links.demo !== '#' ? 'noopener noreferrer' : undefined}
                            className="block"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6 cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </a>

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
