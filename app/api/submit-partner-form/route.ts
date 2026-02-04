import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// Basic URL validation regex
const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, portfolioLink, partnerType, message } = body;

    // --- Server-Side Validation ---
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ message: 'Nome inválido fornecido.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
        return NextResponse.json({ message: 'Email inválido fornecido.' }, { status: 400 });
    }
    if (!portfolioLink || typeof portfolioLink !== 'string' || !URL_REGEX.test(portfolioLink)) {
        return NextResponse.json({ message: 'Link de portfólio inválido.' }, { status: 400 });
    }
    const validPartnerTypes = ['freelancer', 'influencer', 'agency', 'other'];
    if (!partnerType || !validPartnerTypes.includes(partnerType)) {
        return NextResponse.json({ message: 'Tipo de parceiro inválido.' }, { status: 400 });
    }
    if (message && (typeof message !== 'string' || message.length > 5000)) {
        return NextResponse.json({ message: 'Mensagem inválida ou excede o limite de caracteres.' }, { status: 400 });
    }

    // --- Data Processing ---
    // Log for demonstration. In production, avoid logging sensitive data.
    console.log(`New partner form submission received at ${new Date().toISOString()}`);

    // Here you would integrate with your backend logic, e.g.,
    // - Send a notification email to your partnerships team.
    // - Add the applicant to a specific list in your CRM.
    // - Save the data to a 'Partners' or 'Applicants' table in your database.

    return NextResponse.json({ message: 'Proposta de parceria recebida!' }, { status: 200 });

  } catch (error) {
    console.error("API Error (Partner Form):", error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
