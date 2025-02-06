import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/Logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone } from 'react-icons/fa';

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'Services', link: '/services' },
  { title: 'Projects', link: '/projects' },
  { title: 'Members', link: '/members' },
  { title: 'Contact', link: '/contact' },
  { title: 'About', link: '/about' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="fixed bg-[rgba(0,0,0,0.7)] navbar relative h-16  shadow-lg text-white z-100">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="w-20 h-20 object-cover" alt="Logo" />
          {/* <span className="text-blue-400 self-center whitespace-nowrap text-xl font-bold lg:text-2xl">
            NexSky
          </span> */}
        </Link>
        <button className="menu-icon z-50 lg:hidden" onClick={handleShowNavbar}>
          {showNavbar ? (
            <X size={28} className="" />
          ) : (
            <Menu size={28} className="" />
          )}
        </button>
        <div
          className={`nav-elements navebar bg-[rgba(0,0,0,0.9)] fixed  inset-0 z-40 h-screen w-screen transform background transition-transform duration-300 ease-in-out lg:relative lg:right-auto lg:top-auto  lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent ${
            showNavbar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className={`mt-16 flex flex-col space-y-8 px-6 py-6 lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-0 text-center`}>
            {navLinks.map(({ title, link }, index) => (
              <li key={index} className="group">
                <Link
                  to={link}
                  className="relative p-2 text-lg font-medium transition-all duration-300 ease-in-out hover:text-blue-600 lg:text-base"
                  onClick={() => setShowNavbar(false)} // Close the navbar on link click
                >
                  {title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <div className="mt-4 flex justify-center space-x-4 lg:mt-0 lg:justify-end">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaFacebook size={24} />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaTwitter size={24} />
              </Link>
              <Link to="https://www.linkedin.com/company/nexsky" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaLinkedin size={24} />
              </Link>
              <Link to="tel:+923429327224" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <FaPhone size={24} />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
