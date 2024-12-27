'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { submitContactForm } from '@/lib/api/contact';
import type { ContactFormData } from '@/types/contact';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      hiringModel: formData.get('hiringModel') as string,
      message: formData.get('message') as string,
    };

    try {
      await submitContactForm(data);
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Find Your Perfect Developer?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let's discuss your needs and match you with the right resource.
          </p>
        </div>

        {success && (
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
            {error}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="hiringModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferred Hiring Model
              </label>
              <select
                id="hiringModel"
                name="hiringModel"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a model</option>
                <option value="hourly">Hourly Contract</option>
                <option value="fulltime">Full-Time Developer</option>
                <option value="parttime">Part-Time Developer</option>
                <option value="team">Team Augmentation</option>
                <option value="retainer">Retainer Model</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-600 dark:text-gray-300">info@hireelite.dev</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-600 dark:text-gray-300">Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}