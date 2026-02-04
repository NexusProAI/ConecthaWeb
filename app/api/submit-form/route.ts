import { NextResponse } from 'next/server';

// Basic email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // --- Server-Side Validation ---
    // This is a critical security step. Never trust data from the client.
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ message: 'Nome inválido fornecido.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
        return NextResponse.json({ message: 'Email inválido fornecido.' }, { status: 400 });
    }
    if (!company || typeof company !== 'string' || company.trim().length < 2) {
        return NextResponse.json({ message: 'Nome da empresa inválido.' }, { status: 400 });
    }
    if (message && (typeof message !== 'string' || message.length > 5000)) {
        return NextResponse.json({ message: 'Mensagem inválida ou excede o limite de caracteres.' }, { status: 400 });
    }

    // --- Data Processing ---
    // At this point, the data is validated and can be processed.
    
    // Anonymized log entry to confirm submission
    console.log(`New form submission received at ${new Date().toISOString()}`);

    // --- Backend Logic Integration ---
    // This is where you would send an email or save to a database.

    /*
    // EXAMPLE: Sending an email with Nodemailer (you would need to install nodemailer)
    
    import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Your Site" <noreply@example.com>',
      to: "your-email@example.com", // Your receiving email
      subject: `New Form Submission from ${name}`,
      html: `<p>You have a new submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
             <p><strong>Message:</strong> ${message || 'N/A'}</p>`,
    });
    */

    /*
    // EXAMPLE: Saving to a database with Prisma (requires Prisma setup)

    import { PrismaClient } from '@prisma/client'
    const prisma = new PrismaClient()

    await prisma.submission.create({
      data: {
        name,
        email,
        phone,
        company,
        message,
      },
    });
    */

    // --- Return Success Response ---
    return NextResponse.json({ message: 'Formulário recebido com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    // Return a generic error message to avoid leaking implementation details.
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
