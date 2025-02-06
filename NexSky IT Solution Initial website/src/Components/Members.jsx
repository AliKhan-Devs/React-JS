import React, { useEffect, useState } from 'react';
import membersData from '../Data/Members.json';
import { FaLinkedin, FaGithub, FaFacebook, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Hero from './Hero';
import GetinTouch from './GetinTouch';

export default function Team() {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        setMembers(membersData);
    }, []);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const handleClosePopup = () => {
        setSelectedMember(null);
    };

    return (
        <>
            <Hero mainHeading="Our Members" Heading="" desc="" margin="10" height="screen/2"/>
            <div className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="mt-4 font-bold text-2xl text-gray-600">Meet the talented individuals behind NexSky.</p>
                    </div>
                    <div className="cursor-pointer grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {members.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                onClick={() => handleMemberClick(member)}
                            >
                                <div className="flex justify-center mt-6">
                                    <img
                                        src={require(`../Assests/${member.image}`)}
                                        alt={member.name}
                                        className="w-64 h-64 rounded-full object-cover border-4 border-blue-600"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="mt-4 text-xl font-semibold text-blue-600">{member.name}</h3>
                                    <p className="mt-2 text-gray-600">{member.role}</p>
                                    <div className="mt-4 flex justify-center space-x-4">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white hover:bg-blue-600 transition duration-300">
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover:bg-black transition duration-300">
                                            <FaGithub size={24} />
                                        </a>
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:text-white hover:bg-blue-600 transition duration-300">
                                            <FaFacebook size={24} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <GetinTouch/>
            </div>
            {selectedMember && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-3xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 relative overflow-y-auto max-h-[90vh] shadow-lg">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-50"
                            onClick={handleClosePopup}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex justify-center mt-6">
                            <img
                                src={require(`../Assests/${selectedMember.image}`)}
                                alt={selectedMember.name}
                                className="w-64 h-64 rounded-full object-cover border-4 border-blue-600"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-blue-600">{selectedMember.name}</h3>
                            <p className="mt-2 text-gray-600">{selectedMember.role}</p>
                            <div className="mt-4 flex justify-center space-x-4">
                                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white hover:bg-blue-600 transition duration-300">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover:bg-black transition duration-300">
                                    <FaGithub size={24} />
                                </a>
                                <a href={selectedMember.facebook} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:text-white hover:bg-blue-600 transition duration-300">
                                    <FaFacebook size={24} />
                                </a>
                            </div>
                            <p className="mt-4 text-gray-700 text-justify">{selectedMember.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
