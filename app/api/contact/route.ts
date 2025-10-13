import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Formspree, SendGrid, etc.)
    // For now, just return success

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
