import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import type { HiringModel, ContactInfoItem } from './types';

export const hiringModels: HiringModel[] = [
  { value: 'hourly', label: 'Hourly Contract' },
  { value: 'fulltime', label: 'Full-Time Developer' },
  { value: 'parttime', label: 'Part-Time Developer' },
  { value: 'team', label: 'Team Augmentation' },
  { value: 'retainer', label: 'Retainer Model' }
];

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@devhire.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New York, NY 10001'
  },
  {
    icon: MessageSquare,
    label: 'Live Chat',
    value: 'Available 24/7'
  }
];