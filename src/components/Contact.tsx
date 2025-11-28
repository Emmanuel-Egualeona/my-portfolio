import React from 'react';

import { Mail, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 border-t border-swiss-black/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">
                        LET'S WORK <br /> TOGETHER
                    </h2>
                    <p className="text-xl text-gray-600 max-w-md mb-8">
                        I'm currently available for freelance projects and open to full-time opportunities.
                    </p>
                    <a
                        href="mailto:hello@example.com"
                        className="inline-block text-2xl md:text-3xl font-bold hover:text-swiss-red transition-colors border-b-2 border-black hover:border-swiss-red pb-1"
                    >
                        hello@emmanuel.dev
                    </a>
                </div>

                <div className="flex flex-col justify-end items-start md:items-end">
                    <div className="flex gap-6 mb-8">
                        <a href="#" className="p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:hello@example.com" className="p-4 bg-gray-100 hover:bg-swiss-red hover:text-white transition-colors rounded-full">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Emmanuel Egualeona. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
