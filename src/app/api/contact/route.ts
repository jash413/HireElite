import { NextResponse } from 'next/server';
import { ContactFormData } from '@/types/contact';
import { validateContactForm } from '@/lib/validation/contactForm';
import { saveContactForm } from '@/lib/services/contactService';

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
    
    // Validate form data
    const validationError = validateContactForm(data);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Save to MongoDB
    await saveContactForm(data);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}