import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
    const skills = [
        { name: 'Frontend Architecture', icon: <Code size={24} /> },
        { name: 'UI/UX Design', icon: <Palette size={24} /> },
        { name: 'Performance Optimization', icon: <Zap size={24} /> },
        { name: 'Accessibility', icon: <Globe size={24} /> },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
                        ABOUT <br /> ME
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            I'm a passionate Frontend Developer based in Abuja, Nigeria. My journey began with a curiosity for how things work on the web, which quickly evolved into a career dedicated to building exceptional digital experiences.
                        </p>
                        <p>
                            I specialize in the React ecosystem, crafting scalable applications that are not only visually stunning but also performant and accessible to everyone. I believe that good design is invisible—it just works.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-swiss-white border border-swiss-black/5 hover:border-swiss-red/50 transition-colors group"
                        >
                            <div className="mb-4 text-swiss-black group-hover:text-swiss-red transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="font-bold text-lg tracking-tight">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
