import { NextResponse } from "next/server";
import { Resend } from "resend";
import { reservationSchema } from "@/lib/validations";
import { site } from "@/lib/data/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = reservationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid reservation details", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, phone, date, time, partySize, notes } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESERVATION_TO_EMAIL || site.email;

  if (!apiKey) {
    console.error("RESERVATION_ERROR: RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Reservations are temporarily unavailable. Please call or WhatsApp us instead." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Breathe Reservations <reservations@breatherestolounge.com>",
      to: toEmail,
      replyTo: email,
      subject: `New reservation request — ${name} (${date}, party of ${partySize})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New reservation request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Date:</strong> ${escapeHtml(date)}</p>
          <p><strong>Time:</strong> ${escapeHtml(time)}</p>
          <p><strong>Party size:</strong> ${escapeHtml(partySize)}</p>
          ${notes ? `<p><strong>Notes:</strong> ${escapeHtml(notes)}</p>` : ""}
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RESERVATION_ERROR: failed to send email", error);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call us to confirm." },
      { status: 502 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
