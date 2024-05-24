import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create a transporter object using SMTP transport.
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use any email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Contact form submission from ${name}`,
    text: `You have a new contact form submission from:
    
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
