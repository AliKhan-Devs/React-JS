import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function ServiceCard({ icon: Icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"
    >
      <div className="relative">
        <Icon className="w-12 h-12 text-[#fca903] mb-6" />
        <div className="absolute -inset-2 bg-[#fca903] opacity-20 blur-xl rounded-full" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}