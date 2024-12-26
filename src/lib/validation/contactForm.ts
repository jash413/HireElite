import { ContactFormData } from '@/types/contact';

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.name?.trim()) {
    return 'Name is required';
  }

  if (!data.email?.trim()) {
    return 'Email is required';
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Invalid email format';
  }

  if (!data.message?.trim()) {
    return 'Message is required';
  }

  return null;
}