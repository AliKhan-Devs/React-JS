import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
export default function GetinTouch() {
    return (
        <>
         <div className="mt-8 mb-2 mx-4 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg text-center">
            <p className="text-2xl font-bold">Boost your online presence with our expert services. Chat with us now and let's bring your vision to life!</p>
            <a href="https://wa.me/923429327224" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                <FaWhatsapp className="inline-block mr-2" /> Get in Touch
            </a>
        </div>
        </>
    )
}
