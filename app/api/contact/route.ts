import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

/*
 * API Route: POST /api/contact
 *
 * Recebe { name, email, message } do formulário e envia um email
 * usando a API do Resend. A chave de API fica em variável de ambiente
 * (nunca no código) — isso é uma prática de segurança fundamental.
 *
 * Para usar:
 *  1. Crie uma conta em resend.com
 *  2. Gere uma API key
 *  3. Crie um arquivo .env.local na raiz com:
 *     RESEND_API_KEY=re_xxxxxxxxxxxx
 *     CONTACT_EMAIL=seu@email.com
 */

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    // Validação básica no servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "yasminsuellen@email.com",
      subject: `[Portfolio] Nova mensagem de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E85D04;">Nova mensagem do portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border-color: #eee;" />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
