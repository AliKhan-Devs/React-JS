import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero(props) {
  return (
    <>
      <div className={`relative bg-cover m-auto bg-center h-${props.height}`} style={{ backgroundImage: "url('https://freerangestock.com/sample/121129/group-working-in-the-office-black-and-white-photo-.jpg')", }}>
        <div className="text center absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className={`text-blue-600 mt-${props.margin}  mt-6text text-3xl sm:text-4xl md:text-5xl font-extrabold  stroke-white stroke-2`} style={{ textShadow: '2px 2px 3px white' }}>
            {props.mainHeading}
          </h1>
          <h3 className="text-white mt-6 text-xl sm:text-4xl md:text-4xl font-extrabold leading-tight">
            {props.Heading}
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white">
            {props.desc}
          </p>
          {props.desc && (
            <div className="mt-16 flex justify-center">
              {/* <Link
            to="/services"
            className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-black hover:scale-105 transition transform duration-300 ease-in-out md:py-3 md:text-base md:px-8"
          >
            Our Services
          </Link> */}
              <Link to="/contact">
                <button className=" group not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-full bg-white border text-xl hover:text-white hover:dark:text-white border-zinc-300 dark:border-zinc-700 hover:bg-blue-600 hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out">
                 Contact
                  <svg viewBox="0 0 24 24" className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <line x1="5" y1="12" x2="19" y2="12" className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                    <polyline points="12 5 19 12 12 19" className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                  </svg>
                </button>


              </Link>
            </div>
          )}
        </div>
      </div>

    </>
  );
}
