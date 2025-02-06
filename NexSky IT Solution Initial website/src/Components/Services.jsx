import React, { useEffect, useState } from 'react';
import servicesData from '../Data/Services.json';
import Hero from './Hero';
import GetinTouch from './GetinTouch';
import { motion } from 'framer-motion';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    return (
        <>
            <Hero mainHeading="Our Services" Heading="" desc="" margin="10" height="screen/2"/>
            <div className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="mt-4 text-2xl font-bold tect-bold text-gray-600">We offer a wide range of services to meet your needs.</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {services.map((service, index) => (
                            <motion.div
                            key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-50 "
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            
                                <div className="relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="mt-4 text-xl font-semibold text-blue-600">{service.title}</h3>
                                    <p className="mt-2 text-gray-700 text-justify">
                                        {service.description} At NexSky, we pride ourselves on delivering top-notch solutions tailored to your unique needs. Our team of experts is dedicated to providing exceptional service and support, ensuring your projects are completed on time and to the highest standards. Whether you're looking for innovative web development, cutting-edge cybersecurity, or comprehensive UI/UX design, we have the skills and experience to help your business succeed.
                                    </p>
                                </div>
                       
                            </motion.div>
                        ))}
                    </div>
                </div>
                <GetinTouch/>
            </div>
        </>
    );
}
