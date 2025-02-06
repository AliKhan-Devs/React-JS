import React from 'react';
import { FaCode, FaPaintBrush, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const reasons = [
    {
        icon: <FaCode />,
        title: 'Expert Developers',
        description: 'Our team of experienced developers ensures top-notch web development services.',
    },
    {
        icon: <FaPaintBrush />,
        title: 'Creative Designers',
        description: 'Our creative designers bring your vision to life with stunning graphics and UI/UX designs.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Cybersecurity',
        description: 'We provide robust cybersecurity solutions to protect your digital assets.',
    },
    {
        icon: <FaLaptopCode />,
        title: 'Comprehensive Solutions',
        description: 'From DSA/C++ to WordPress development, we offer a wide range of IT services.',
    },
];

export default function Choose() {
    return (
        <div className="bg-gray-100 py-16">
            <h2 className="text-3xl text-center mb-8 font-extrabold text-gray-900">Why Choose Us</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <motion.div
                    className='rounded-lg shadow-lg lg:w-1/2 mt-10 lg:mt-0 lg:mr-10'
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8}}
                // viewport={{ once: false }}
                >
                    <img
                        src="https://img.freepik.com/premium-photo/teamwork-is-what-allows-us-succeed-portrait-group-businesspeople-working-together-office_590464-58183.jpg"
                        alt="Team working"
                        // className="rounded-lg shadow-lg lg:w-1/2 mt-10 lg:mt-0 lg:mr-10"
                    />
                </motion.div>



                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2 text-center lg:text-left">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        // viewport={{ once: false }}
                        >
                            <div className="text-indigo-600 text-4xl mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                            <p className="mt-2 text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
