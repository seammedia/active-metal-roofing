import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Get the page path from headers if available
    const referer = request.headers.get('referer') || '-';
    const pagePath = referer ? new URL(referer).pathname : '-';

    // Build email subject
    const subject = `New Website Lead — ${name}${service ? ` (${service})` : ''}`;

    // Build email HTML content
    const html = `
      <h2>New enquiry from Active Metal Roofing website</h2>
      <p><strong>Name:</strong> ${name || '-'}</p>
      <p><strong>Email:</strong> ${email || '-'}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Service:</strong> ${service || '-'}</p>
      <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p><small>Source page: ${pagePath}</small></p>
      <p><small>Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</small></p>
    `;

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'Active Metal Roofing <noreply@activemetalroofing.com.au>',
      to: ['luke@activemetalroofing.com.au'],
      bcc: ['contact@seammedia.com.au'],
      replyTo: email,
      subject,
      html,
    });

    // Log success
    console.log('Contact form submitted successfully:', {
      name,
      email,
      service,
      emailId: (result as any)?.id,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, id: (result as any)?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
