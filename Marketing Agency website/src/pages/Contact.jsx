import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <div className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-8">Get in Touch</h1>
          <p className="text-xl text-gray-400">
            Let's discuss how we can help transform your digital presence.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto" style={{border: '1px solid white', borderRadius: '10px', padding: '20px'}}>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Name Input */}
            <div className="relative">
              <label className="block text-lg mb-2">Name</label>
              <div className="absolute left-4 top-1/2 transform translate-y-1/2 text-gray-400">
                <FaUser />
              </div>
              <input
                type="text"
                className="w-full bg-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-lg mb-2">Email</label>
              <div className="absolute left-4 top-1/2 transform translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                className="w-full bg-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your email"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label className="block text-lg mb-2">Message</label>
              <div className="absolute left-4 top-1/2 transform translate-y-1/2 text-gray-400">
                <FaPaperPlane />
              </div>
              <textarea
                rows="6"
                className="w-full bg-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
