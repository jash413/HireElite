import { NextResponse } from 'next/server';
import { ContactFormData } from '@/types/contact';
import { validateContactForm } from '@/lib/validation/contactForm';

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

    // Store in database (implement your database logic here)
    // For now, we'll just simulate success
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          id: Date.now(),
          ...data,
          createdAt: new Date().toISOString()
        }
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