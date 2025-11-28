import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const About: React.FC = () => {
    const skills = [
        {
            name: 'Frontend Development',
            icon: <Code size={24} />,
            tech: 'React, TypeScript, Tailwind CSS'
        },
        {
            name: 'Backend Architecture',
            icon: <Database size={24} />,
            tech: 'Node.js, Express, PostgreSQL'
        },
        {
            name: 'UI/UX Design',
            icon: <Palette size={24} />,
            tech: 'Figma, Responsive Design'
        },
        {
            name: 'System Administration',
            icon: <Wrench size={24} />,
            tech: 'Server Setup, Troubleshooting'
        },
    ];

    return (
        <section id="about" className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6 md:mb-8">
                        ABOUT <br /> ME
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
                        <p>
                            I'm a Full-Stack Developer based in Abuja, Nigeria, with a strong focus on frontend development and a passion for building modern, accessible web applications.
                        </p>
                        <p>
                            During my industrial training at the Medical Laboratory Science Council of Nigeria (MLSCN), I gained hands-on experience in hardware and software troubleshooting, server rack upgrades, network switch installations, and led the redesign of their website—improving both visual identity and performance.
                        </p>
                        <p>
                            I specialize in React and TypeScript for frontend work, while building scalable backend systems with Node.js, Express, and PostgreSQL. I care deeply about clean UI, strong architecture, and writing code that's maintainable and performant.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, building side projects like traffic simulations, or contributing to solutions that make a real impact.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 md:p-6 bg-swiss-white border border-swiss-black/5 hover:border-swiss-red/50 transition-colors group"
                        >
                            <div className="mb-4 text-swiss-black group-hover:text-swiss-red transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="font-bold text-base md:text-lg tracking-tight mb-2">{skill.name}</h3>
                            <p className="text-sm text-gray-500">{skill.tech}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
