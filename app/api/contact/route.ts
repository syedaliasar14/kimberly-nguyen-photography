import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "./template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, eventDate, location,
      service, description, inspo, howDidYouHear } = await req.json();
;
    const formattedEventDate = eventDate ? new Date(eventDate).toLocaleDateString() : 'Not specified';
    const formattedLocation = location || 'Not specified';
    const formattedInspo = inspo || 'None provided';

    await resend.emails.send({
      from: "contact@my-nimbus.com",
      to: "syedali.asar14@gmail.com",
      subject: `New ${service} Inquiry from ${firstName} ${lastName}`,
      react: ContactEmail({
        firstName,
        lastName,
        email,
        phone,
        eventDate: formattedEventDate,
        location: formattedLocation,
        service,
        description,
        inspo: formattedInspo,
        howDidYouHear
      }),
      replyTo: email
    });

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}