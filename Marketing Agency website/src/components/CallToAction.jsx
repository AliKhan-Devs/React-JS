import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center mb-8">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Join our community of satisfied clients and take the first step towards digital excellence. Contact us today for a free consultation or subscribe to our newsletter for the latest updates.
        </p>
       <Link to='/contact'> <div className="text-center">
          <button  className="py-3 px-8 bg-black text-white rounded-full font-bold shadow-lg transition-colors flex items-center justify-center gap-2">
            <FaRocket className="text-white" /> Get Started
          </button>
        </div></Link>
      </div>
    </section>
  );
}

export default CallToAction;
