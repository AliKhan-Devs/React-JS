import React, { useEffect, useState, useRef } from 'react';
import { FaProjectDiagram, FaSmile, FaThumbsUp } from 'react-icons/fa';

const StatsSection = () => {
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
     // Set your target number here
    const projectTarget = 10;
     // Set your target number here
    const customerTarget = 7;

    const incrementProjects = () => {
      setProjects(prev => {
        if (prev < projectTarget) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return prev;
        }
      });
    };

    const incrementCustomers = () => {
      setCustomers(prev => {
        if (prev < customerTarget) {
          return prev + 1;
        } else {
          clearInterval(customerInterval);
          return prev;
        }
      });
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setProjects(0);
        setCustomers(0);
        projectInterval = setInterval(incrementProjects, 50);
        customerInterval = setInterval(incrementCustomers, 50);
      } else {
        clearInterval(projectInterval);
        clearInterval(customerInterval);
      }
    };

    let projectInterval;
    let customerInterval;

    const observer = new IntersectionObserver(handleIntersection, {
      // Adjust this value as needed
      threshold: 1,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(projectInterval);
      clearInterval(customerInterval);
    };
  }, []);

  return (
    <section ref={sectionRef} className="mb-3 mx-4 rounded flex flex-col md:flex-row items-center justify-around p-5 bg-blue-600">
      <div className="cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 mb-6 md:mb-0">
        <FaProjectDiagram size={48} className="text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800">{projects}</h3>
        <p className="text-lg text-gray-700">Projects Completed</p>
      </div>
      <div className="cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 mb-6 md:mb-0">
        <FaSmile size={48} className="text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800">{customers}</h3>
        <p className="text-lg text-gray-700">Happy Customers</p>
      </div>
      <div className="cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
        <FaThumbsUp size={48} className="text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800">100%</h3>
        <p className="text-lg text-gray-700">Satisfaction</p>
      </div>
    </section>
  );
};

export default StatsSection;
