import React, { useState } from 'react';
import projectsData from '../Data/Projects.json';
import { FaTimes } from 'react-icons/fa';
import Hero from './Hero';
import GetinTouch from './GetinTouch';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleClosePopup = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <Hero mainHeading="Our Projects" Heading="" desc="" margin="10" height="screen/2" />
            <div className=" py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="mt-4 text-2xl font-bold text-gray-600">Explore some of our recent work.</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-50"
                            >
                                <div className="relative">
                                    <img
                                        src={require(`../Assests/${project.image}`)}
                                        alt={project.name}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="mt-4 text-xl font-semibold text-blue-600">{project.name}</h3>
                                    <p className="mt-2 text-gray-700">{project.description} <span className='cursor-pointer underline text-blue-600' onClick={() => handleProjectClick(project)}>Read more</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg max-w-3xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 relative overflow-y-auto max-h-[90vh] shadow-lg">
                            <button
                               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                                onClick={handleClosePopup}
                            >
                                <FaTimes size={24} />
                            </button>
                            <img
                                src={require(`../Assests/${selectedProject.image}`)}
                                alt={selectedProject.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-600">{selectedProject.name}</h3>
                            <p className="text-gray-700 mt-2 text-justify" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} ></p>
                        </div>
                    </div>
                )}



                <GetinTouch />
            </div>

        </>
    );
};

export default Projects;