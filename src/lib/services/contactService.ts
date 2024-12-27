import { ContactFormData } from '@/types/contact';
import clientPromise from '../db/mongodb';

export async function saveContactForm(data: ContactFormData) {
  const client = await clientPromise;
  const db = client.db('HireElite');
  
  const contact = {
    ...data,
    createdAt: new Date(),
    status: 'new'
  };

  const result = await db.collection('contacts').insertOne(contact);
  return result;
}