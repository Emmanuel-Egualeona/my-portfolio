import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Mail, Instagram, Twitter } from "lucide-react";

interface GetInTouchProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ isOpen, onClose }) => {
    const contactOptions = [
        {
            icon: <Phone size={24} />,
            title: "Call Me",
            description: "Direct phone call",
            action: "tel:+2348113817484",
            color: "bg-blue-500 hover:bg-blue-600"
        },
        {
            icon: <MessageCircle size={24} />,
            title: "WhatsApp",
            description: "Quick message",
            action: "https://wa.me/2348113817484",
            color: "bg-green-500 hover:bg-green-600"
        },
        {
            icon: <Mail size={24} />,
            title: "Email",
            description: "Send an email",
            action: "mailto:eegualeona@gmail.com",
            color: "bg-swiss-red hover:bg-swiss-black"
        },
        {
            icon: <Instagram size={24} />,
            title: "Instagram",
            description: "DM me",
            action: "https://www.instagram.com/eguaxy?igsh=MW5kcmJnNXJhcm54OQ%3D%3D&utm_source=qr",
            color: "bg-pink-500 hover:bg-pink-600"
        },
        {
            icon: <Twitter size={24} />,
            title: "Twitter/X",
            description: "Follow & message",
            action: "https://x.com/poojaparty?s=21",
            color: "bg-black hover:bg-gray-800"
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <h2 className="text-2xl font-bold text-swiss-black">Get In Touch</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Contact Options */}
                            <div className="p-6 space-y-4">
                                {contactOptions.map((option, index) => (
                                    <motion.a
                                        key={index}
                                        href={option.action}
                                        target={option.action.startsWith('http') ? '_blank' : undefined}
                                        rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                                    >
                                        <div className={`p-3 rounded-full text-white ${option.color} group-hover:scale-110 transition-transform`}>
                                            {option.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-swiss-black">{option.title}</h3>
                                            <p className="text-sm text-gray-600">{option.description}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="px-6 pb-6">
                                <p className="text-sm text-gray-500 text-center">
                                    Choose your preferred way to connect
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GetInTouch;