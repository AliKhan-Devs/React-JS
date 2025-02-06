import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
    {
        icon: <FaLightbulb />,
        title: 'Ideation',
        description: 'We brainstorm and come up with innovative ideas tailored to your needs.',
    },
    {
        icon: <FaDraftingCompass />,
        title: 'Planning',
        description: 'We create a detailed plan and roadmap to ensure the project’s success.',
    },
    {
        icon: <FaCode />,
        title: 'Development',
        description: 'Our expert developers bring the plan to life with clean and efficient code.',
    },
    {
        icon: <FaRocket />,
        title: 'Launch',
        description: 'We launch the final product and ensure everything runs smoothly.',
    },
];

export default function OurProcess() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Our Process</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col justify-center"
                            whileHover={{ scale: 1.0 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            // viewport={{ once: true }}
                        >
                            <div className="text-indigo-600 text-4xl mb-4 mx-auto">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 text-center">{step.title}</h3>
                            <p className="mt-2 text-gray-600 text-center">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
