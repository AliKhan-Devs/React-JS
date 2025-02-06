import React from 'react';
import {FaTwitter,FaLinkedin,FaFacebook } from 'react-icons/fa';
import logo from '../Assests/Logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="bg-[rgba(0,0,0,0.8)] text-white py-8 footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                    <img src={logo} className="cursor-pointer w-20 h-20 object-cover" alt="Logo" />
                        <p className="mt-2">Empowering Tomorrow's Tech</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-2">
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/services" className="hover:underline ">Services</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-right">
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="mt-2 flex justify-center md:justify-end space-x-4">
                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white hover:text-white hover:bg-blue-600 transition duration-300 text-2xl"><FaFacebook /></Link>
                            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white hover:text-white hover:bg-blue-600 transition duration-300 text-2xl"><FaTwitter /></Link>
                            <Link to="https://www.linkedin.com/company/nexsky" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-white hover:text-white hover:bg-blue-600 transition duration-300 text-2xl"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>© 2024 NexSky. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
