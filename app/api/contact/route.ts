import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "contact@my-nimbus.com",
      to: "sa.asar14@gmail.com",
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email
    });

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
