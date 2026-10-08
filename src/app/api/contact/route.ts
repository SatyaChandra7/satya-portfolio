import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'satyachandra722@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    const emailSubject = subject?.trim() 
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] New message from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">
        <div style="background-color: #FF6600; padding: 16px; border-radius: 8px; text-align: center;">
          <h2 style="color: #FFFFFF; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
        </div>
        
        <div style="padding: 20px 0; color: #0F172A; line-height: 1.6;">
          <p style="margin: 8px 0;"><strong>Client Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #FF6600; text-decoration: underline;">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
          
          <p style="margin-bottom: 8px;"><strong>Message Content:</strong></p>
          <div style="background-color: #F8FAFC; padding: 16px; border-radius: 8px; border-left: 4px solid #FF6600; white-space: pre-wrap; color: #1E293B;">${message}</div>
        </div>

        <div style="font-size: 12px; color: #64748B; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 16px; margin-top: 20px;">
          Sent automatically from <strong>B. Satya Chandra Portfolio Website</strong>.<br />
          Target Recipient: <a href="mailto:${RECIPIENT_EMAIL}">${RECIPIENT_EMAIL}</a>
        </div>
      </div>
    `;

    // 1. Try Nodemailer SMTP if credentials are configured
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: `"${name}" <${email}>`,
          subject: emailSubject,
          html: htmlContent,
          text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });

        console.log(`[Contact API] Email successfully sent to ${RECIPIENT_EMAIL} via SMTP.`);
        return NextResponse.json({
          success: true,
          message: `Message sent successfully to ${RECIPIENT_EMAIL}.`,
        });
      } catch (smtpError) {
        console.error('[Contact API] SMTP Send Failed, attempting fallback:', smtpError);
      }
    }

    // 2. Fallback to FormSubmit AJAX endpoint for zero-config automatic delivery to satyachandra722@gmail.com
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: emailSubject,
          subject: subject || 'Portfolio Contact Inquiry',
          message: message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (formSubmitRes.ok) {
        console.log(`[Contact API] Message forwarded to ${RECIPIENT_EMAIL} via FormSubmit service.`);
        return NextResponse.json({
          success: true,
          message: `Message sent successfully to ${RECIPIENT_EMAIL}.`,
        });
      }
    } catch (fsError) {
      console.error('[Contact API] FormSubmit fallback failed:', fsError);
    }

    // 3. If server-side endpoints fail (e.g., offline or network blocked), return success with mailto trigger indicator
    return NextResponse.json({
      success: true,
      fallbackToMailto: true,
      recipient: RECIPIENT_EMAIL,
      message: `Message captured. If automatic delivery fails, you can reach ${RECIPIENT_EMAIL} directly.`,
    });

  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing contact form.' },
      { status: 500 }
    );
  }
}
