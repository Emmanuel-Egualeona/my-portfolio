import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Full Stack',
        description: 'Built a scalable shopping experience with secure Stripe payments and real-time inventory management, resulting in a 40% increase in user engagement.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'Task Management App',
        category: 'Productivity',
        description: 'Developed a drag-and-drop task organizer using React DnD, improving team collaboration efficiency by streamlining workflow tracking.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
        tech: ['React', 'Redux', 'Firebase'],
        links: { demo: '#', repo: '#' }
    },
    {
        title: 'Portfolio V1',
        category: 'Design',
        description: 'Designed a minimalist personal portfolio focusing on accessibility and performance, achieving a perfect 100 Lighthouse score.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        tech: ['HTML', 'SCSS', 'JavaScript'],
        links: { demo: '#', repo: '#' }
    }
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="py-24">
            <div className="flex items-end justify-between mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                    SELECTED <br /> WORK
                </h2>
                <span className="hidden md:block text-swiss-red font-medium tracking-widest uppercase mb-2">
                    (03)
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
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
                            <h3 className="text-2xl font-bold tracking-tight group-hover:text-swiss-red transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.links.repo} className="hover:text-swiss-red"><Github size={20} /></a>
                                <a href={project.links.demo} className="hover:text-swiss-red"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p className="text-sm font-medium text-swiss-red uppercase tracking-widest mb-2">
                            {project.category}
                        </p>
                        <p className="text-gray-600 mb-4 line-clamp-2">
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
