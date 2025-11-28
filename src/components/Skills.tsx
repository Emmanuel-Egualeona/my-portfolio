import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design', 'Vite']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'Server Architecture']
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git', 'Figma', 'VS Code', 'Python', 'Pygame', 'System Administration']
        }
    ];

    return (
        <section id="skills" className="py-24 border-t border-swiss-black/10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-8 md:mb-12 lg:mb-16"
            >
                SKILLS & <br /> TECHNOLOGIES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-swiss-red uppercase">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-2 md:px-4 bg-gray-100 text-gray-700 font-medium text-xs md:text-sm hover:bg-swiss-red hover:text-white transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
