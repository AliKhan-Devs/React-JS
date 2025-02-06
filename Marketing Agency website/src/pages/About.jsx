import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBullhorn, FaRocket, FaUsers } from "react-icons/fa";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-8">About Us</h1>
          <p className="text-xl text-gray-400">
            We are a team of digital innovators, creating exceptional experiences that drive business growth.
          </p>
        </motion.div>

        {/* Vision, Mission, and Values Section */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center"
        >
          {["Vision", "Mission", "Values"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-800 p-8 rounded-2xl hover:bg-zinc-700 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-center text-5xl text-white mb-4">
                {item === "Vision" && <FaRocket />}
                {item === "Mission" && <FaBullhorn />}
                {item === "Values" && <FaUsers />}
              </div>
              <h2 className="text-2xl font-semibold mb-4">{item}</h2>
              <p className="text-gray-400">
                Leading the digital transformation through innovative solutions
                and strategic thinking.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "CEO", image: "https://i.pravatar.cc/300?img=8" },
              { role: "Creative Director", image: "https://i.pravatar.cc/300?img=10" },
              { role: "Tech Lead", image: "https://i.pravatar.cc/300?img=7" },
              { role: "Marketing Head", image: "https://i.pravatar.cc/300?img=9" },
            ].map(({ role, image }, index) => (
              <motion.div
                key={role}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center bg-zinc-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto bg-zinc-700 rounded-full overflow-hidden mb-4">
                  <img src={image} alt={role} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <p className="text-gray-400">Our key player in ensuring success.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
