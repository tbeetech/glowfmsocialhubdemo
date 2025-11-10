import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, registrationId } = body;

    // Validate input
    if (!name || !phone || !email || !registrationId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, we'll use a simple nodemailer-like approach
    // In production, you'd want to use a service like Resend, SendGrid, or AWS SES
    
    // Log registration for now
    console.log('===== NEW EMBER CHALLENGE REGISTRATION =====');
    console.log('Registration ID:', registrationId);
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Timestamp:', new Date().toISOString());
    console.log('Email will be sent to: glowfmglowmediastation@gmail.com');
    console.log('===========================================');

    // TODO: Integrate with actual email service
    // Example with Resend (you'd need to install: pnpm add resend):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Glow FM <noreply@glow991fm.com>',
    //   to: 'glowfmglowmediastation@gmail.com',
    //   subject: `Registration for Ember challenge ${registrationId}`,
    //   html: `...formatted email content...`,
    // });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Registration received successfully',
      registrationId,
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}
