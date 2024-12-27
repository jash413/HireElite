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
    value: 'info@hireelite.dev'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+91) 832-005-2869, (+91) 955-816-1920'
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