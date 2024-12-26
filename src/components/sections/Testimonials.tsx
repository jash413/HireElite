import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We were able to scale our development team quickly without the usual hiring delays. The developer we hired integrated seamlessly and helped us launch on time.",
    author: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The free trial option gave us peace of mind, allowing us to test out a developer before committing. It was a smooth and hassle-free experience.",
    author: "Michael Chen",
    role: "Engineering Manager, DataFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Thanks to their expertise and fast onboarding, our developer hit the ground running. We couldn't be happier with the results.",
    author: "Emily Rodriguez",
    role: "Product Lead, CloudScale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Don't just take our word for it - hear from some of our satisfied clients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            Join Our Satisfied Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;