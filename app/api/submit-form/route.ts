import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // --- Server-Side Validation ---
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

    // --- Save to Supabase ---
    const { error } = await supabase
      .from('conectha_leads')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          company: company.trim(),
          message: message?.trim() || null,
        }
      ]);

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ message: 'Erro ao salvar dados.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Formulário recebido com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
