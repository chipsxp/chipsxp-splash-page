import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const readerName = formData.get("readerName")?.toString() || "";
    const authorName = formData.get("authorName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("body")?.toString() || "";

    // Validate form data
    if (!readerName || !authorName || !email || !subject || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'All fields are required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: import.meta.env.EMAIL_USER, // Use authenticated user
      replyTo: email, // Set reply-to to sender's email
      to: 'manager@chipsxp.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Reader's Name:</strong> ${readerName}</p>
        <p><strong>Author's Name:</strong> ${authorName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email sent successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to send email' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
