import { ContactFormData } from '@/types/contact';

export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit form');
    }

    return response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}