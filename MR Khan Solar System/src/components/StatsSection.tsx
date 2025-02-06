import { motion } from 'framer-motion';
import { CircularProgress } from './CircularProgress';

export function StatsSection() {
  const stats = [
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Customer Satisfaction', value: 98, suffix: '%' },
    { label: 'Energy Saved (MW)', value: 1500, suffix: '+' },
    { label: 'Years Experience', value: 15, suffix: '+' },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-[#fca903]">Impact</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Making a difference in sustainable energy, one installation at a time
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center flex flex-col items-center"
            >
              <CircularProgress value={stat.value} suffix={stat.suffix}  />
              <h3 className="text-white mt-4 text-lg font-medium" style={{position:"relative"}}>{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}