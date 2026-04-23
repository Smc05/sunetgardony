import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sunset.gardony@gmail.com",
    replyTo: email,
    subject: `Üzenet a weboldalról: ${name}`,
    text: `Név: ${name}\nE-mail: ${email}\nTelefon: ${phone || "–"}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
