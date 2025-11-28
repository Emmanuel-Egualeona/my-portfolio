import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 border-t border-swiss-black/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6 md:mb-8">
                        LET'S BUILD <br /> SOMETHING
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-md mb-6 md:mb-8">
                        I'm available for freelance projects and full-time opportunities. Let's create something impactful together.
                    </p>
                    <a
                        href="mailto:eegualeona@gmail.com"
                        className="inline-block text-xl md:text-2xl lg:text-3xl font-bold hover:text-swiss-red transition-colors border-b-2 border-black hover:border-swiss-red pb-1 mb-6 md:mb-8 break-all"
                    >
                        eegualeona@gmail.com
                    </a>

                    <div className="mt-6 md:mt-8">
                        <a
                            href="https://wa.me/2348113817484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-swiss-red text-white font-bold text-sm md:text-base uppercase tracking-widest hover:bg-swiss-black transition-colors w-full sm:w-auto"
                        >
                            Start a Project
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col justify-end items-start md:items-end"
                >
                    <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 justify-start md:justify-end">
                        <a
                            href="https://wa.me/2348113817484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full"
                            aria-label="WhatsApp"
                        >
                            <Phone size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/eguaxy?igsh=MW5kcmJnNXJhcm54OQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://x.com/poojaparty?s=21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full"
                            aria-label="X (Twitter)"
                        >
                            <Twitter size={24} />
                        </a>
                        <a
                            href="mailto:eegualeona@gmail.com"
                            className="p-3 md:p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Emmanuel Egualeona. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
