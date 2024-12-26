'use client';

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';

export default function TestimonialGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TestimonialCard 
            testimonial={testimonial}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  );
}