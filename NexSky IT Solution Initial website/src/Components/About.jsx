import React from 'react';
import Hero from './Hero';
import { FaDollarSign, FaUsers, FaCode} from 'react-icons/fa';
import GetinTouch from './GetinTouch';

export default function About() {
    return (
        <>
        <Hero mainHeading="About" Heading="" desc="" margin="10" height="screen/2" />
        <div className="p-4 bg-gray-100 text-black rounded-lg shadow-lg">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                    <div className="bg-black p-4 rounded-full">
                        <FaDollarSign className="text-2xl text-white" />
                    </div>
                    <p className="mt-2 font-bold text-2xl">Competitive Pricing</p>
                    <p className="mt-1 text-sm text-xl">We offer the best prices in the market without compromising on quality.</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                    <div className="bg-black p-4 rounded-full">
                        <FaUsers className="text-2xl text-white" />
                    </div>
                    <p className="mt-2 font-bold text-2xl">Expert Team</p>
                    <p className="mt-1 text-sm text-xl">Our team consists of highly skilled professionals dedicated to your success.</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                    <div className="bg-black p-4 rounded-full">
                        <FaCode className="text-2xl text-white" />
                    </div>
                    <p className="mt-2 font-bold text-2xl">Quality Development</p>
                    <p className="mt-1 text-sm text-xl">We deliver top-notch development services to bring your ideas to life.</p>
                </div>
            </div>
            <div className="my-14 flex flex-col md:flex-row items-center">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/1003/321/desktop-wallpaper-office-workers-2018-in-business-workers-thumbnail.jpg" alt="" />
                <div className="mt-4 md:mt-0 md:ml-8">
                    <h2 className="text-4xl font-extrabold text-blue-600">NexSky</h2>
                    <p className="mt-2 text-black text-xl">
                        NexSky is dedicated to providing top-notch web development, graphic design, UI/UX design, WordPress development, DSA, C++, and cybersecurity consulting services. Our expert team ensures quality and competitive pricing for all your needs.
                    </p>
                </div>
            </div>
           <GetinTouch/>
        </div>
        </>
    );
}
