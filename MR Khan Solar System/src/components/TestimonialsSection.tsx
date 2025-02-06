import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Homeowner',
    content: 'The installation process was smooth and professional. Our energy bills have dropped significantly!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'Khan Solar helped us achieve our sustainability goals while reducing operational costs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Property Developer',
    content: 'Their expertise in large-scale installations is unmatched. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client <span className="text-[#fca903]">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            What our clients say about their solar journey with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <Quote className="w-12 h-12 text-[#fca903] mb-6" />
            <p className="text-xl text-gray-300 mb-8">{testimonials[current].content}</p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-medium">{testimonials[current].name}</h3>
                <p className="text-gray-400">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 text-white hover:text-[#fca903] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 text-white hover:text-[#fca903] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}