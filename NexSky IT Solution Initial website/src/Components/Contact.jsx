import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import GetinTouch from './GetinTouch';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        formData.append('service_id', 'nexskyofficial@gmail.com');
        formData.append('template_id', 'template_csav9no');
        formData.append('user_id', 'yDwZwZ-kAczpTpQNw');
        formData.append('from_name', formData.get('name')); // Add sender's name
        formData.append('reply_to', formData.get('email')); // Add sender's email
        formData.append('message', formData.get('message')); // Add sender's message

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Message sent successfully');
                setMessageSent(true);
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
                setTimeout(() => setMessageSent(false), 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Oops... Something went wrong. Please try again later.');
        }
    };

    return (
        <>
            <Hero mainHeading="Contact Us" Heading="" desc="" margin="10" height="screen/2" />
            <div className="relative body-background bg-gray-100 p-3 w-full">
                <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
                <div className="text-center m-12">
                    <h1 className='font-bold text-blue-600 text-3xl'>Contact <span className='text-blue-800'>& Wrok Together</span></h1>
                </div>
                <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-6">
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                            <FaPhone className="text-center text-2xl " />
                            <Link to={'tel:+923429327224'} className=" mt-2 text-center hover:underline transition duration-3 ease " target="_blank" rel="noopener noreferrer" >+92 342 9327 224</Link>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaEnvelope className="text-2xl text-center" />
                            <Link to={'mailto:nexskyofficial@gmail.com'} className="mt-2 text-center hover:underline  transition duration-3 ease  " target="_blank" rel="noopener noreferrer" >nexskyofficial@gmail.om</Link>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaWhatsapp className="text-2xl text-center" />
                            <a href={'https://wa.me/923429327224'} className="mt-2 text-center hover:underline  transition duration-3 ease  " target="_blank" rel="noopener noreferrer" >+92 342 9327 224</a>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg">
                            <FaMapMarkerAlt className="text-2xl" />
                            <Link to={"https://www.google.com/maps/place/MPCHS+E+11%2F1+E-11,+Islamabad,+Islamabad+Capital+Territory,+Pakistan/@33.6950522,72.9703315,266a,35y,180h/data=!3m1!1e3!4m6!3m5!1s0x38dfbdc7491d9a01:0x1ee8123d5c7ee4ba!8m2!3d33.694066!4d72.9733686!16s%2Fg%2F11gdxl4kdf?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"} className="mt-2 text-center hover:underline  transition duration-3 ease" target="_blank" rel="noopener noreferrer" >E11/1 Islamabad</Link>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:mr-10">
                            <img src="https://t4.ftcdn.net/jpg/00/64/92/61/360_F_64926136_Rtb9IRyaJTGwmuOIbQHNVyut6hYPf5Qx.webp" alt="Contact Us" className="rounded-lg shadow-lg w-full h-full object-cover" />
                        </div>


                        <form onSubmit={handleSubmit} className="bg-black w-full max-w-lg p-4 rounded-lg shadow-lg">
                            <div className="mb-5">
                                <label htmlFor="name" className="text-white block mb-2 text h_color">Name<span>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                    placeholder='Enter Your Name'
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="text-white block mb-2 text h_color">Email<span>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                    placeholder='Enter Your Email Here'

                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="text-white block mb-2 text h_color">Message<span>*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    required
                                    placeholder='Leave your message here'
                                ></textarea>
                            </div>
                            {messageSent && <p className="text-green-500 mb-5">Message sent successfully!</p>}
                            {errorMessage && <p className="text-red-500 mb-5">{errorMessage}</p>}
                            <div className="flex justify-center">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 text-center">
                        <h1 className="text-blue-600 self-center whitespace-nowrap text-xl font-bold lg:text-2xl m-4">Our Location</h1>
                        <iframe title='Location'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.83926831861027!2d72.97033145349432!3d33.69505215460084!2m3!1f180!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x38dfbdc7491d9a01%3A0x1ee8123d5c7ee4ba!2sMPCHS%20E%2011%2F1%20E-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e1!3m2!1sen!2s!4v1726817450949!5m2!1sen!2s"
                            width="600"
                            height="450"
                            className="border-0 w-full max-w-full rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <GetinTouch/>
            </div>
        </>
    );
}
