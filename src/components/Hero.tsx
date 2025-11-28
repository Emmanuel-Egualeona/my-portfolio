import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="max-w-4xl order-2 lg:order-1 px-2">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-swiss-red font-medium tracking-widest uppercase mb-6"
                    >
                        Full-Stack Developer — Frontend Specialist
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tighter mb-6 md:mb-8"
                    >
                        BUILDING WEB <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-swiss-black to-gray-500">
                            EXPERIENCES.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-8 md:mb-12"
                    >
                        I build modern web applications with clean interfaces and scalable architecture. From frontend design to backend logic, I create solutions that work.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex gap-4"
                    >
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-swiss-red text-white font-bold uppercase tracking-widest hover:bg-swiss-black transition-colors"
                        >
                            View Projects
                            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-swiss-black text-swiss-black font-bold uppercase tracking-widest hover:bg-swiss-black hover:text-white transition-colors"
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-full overflow-hidden border-4 border-swiss-white shadow-xl mx-auto lg:mx-0">
                        {/* User Image */}
                        <img src="/profile.jpg" alt="Emmanuel Egualeona" className="w-full h-full object-cover object-top" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
