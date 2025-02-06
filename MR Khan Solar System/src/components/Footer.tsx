import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, MapPinIcon, MapIcon, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="w-8 h-8 text-[#fca903]" />
              <span className="font-bold text-xl"><a href="/">Mr Khan Solar System</a></span>
            </div>
            <p className="text-gray-400">
              Leading the way in solar energy solutions for a sustainable future.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#fca903] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://maps.app.goo.gl/PaqHBRLaDbgDGE8A6" target='blank' className='hover:underline' ><MapPinIcon className='inline  w-6 h-6 mr-2'/>Rashakai Nowshera</a></li>
              <li><a href="https://maps.app.goo.gl/PaqHBRLaDbgDGE8A6" target='blank' className='hover:underline'><MapIcon className='inline  w-6 h-6 mr-2
              '/>KPK, Pakistan</a></li>
              <li><a href="tel:+923426783244" className='hover:underline'><Phone className='inline w-6 h-6 mr-2'/>+923426783244</a></li>
              <li><a href="mailto:info@khansolar.com" className='hover:underline'><Mail className='inline w-6 h-6 mr-2'/>info@khansolar.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#fca903] transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Khan Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}