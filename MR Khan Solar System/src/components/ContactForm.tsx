import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#fca903] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#fca903] transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#fca903] transition-colors"
            placeholder="Your message"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#fca903] to-[#FFEA00] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}