import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="max-w-4xl order-2 lg:order-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-swiss-red font-medium tracking-widest uppercase mb-6"
                    >
                        Frontend Developer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
                    >
                        CRAFTING DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-swiss-black to-gray-500">
                            EXPERIENCES.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12"
                    >
                        I'm Emmanuel Egualeona. I build accessible, pixel-perfect, and performant web experiences using modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 text-swiss-black font-bold uppercase tracking-widest hover:text-swiss-red transition-colors group"
                        >
                            View Projects
                            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-full overflow-hidden border-4 border-swiss-white shadow-xl">
                        {/* User Image */}
                        <img src="/profile.jpg" alt="Emmanuel Egualeona" className="w-full h-full object-cover object-top" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
