import { Resend } from "resend";
import twilio from "twilio";

export async function sendLeadEmail(lead: any) {
  if (!process.env.RESEND_API_KEY || !process.env.LEAD_EMAIL_TO) {
    return { sent: false, reason: "Email not configured" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Volunteer AI Solutions <onboarding@resend.dev>",
    to: process.env.LEAD_EMAIL_TO,
    subject: `New Lead: ${lead.industry || "General"} - ${lead.name || "Unknown"}`,
    text: JSON.stringify(lead, null, 2)
  });

  return { sent: true };
}

export async function sendLeadSms(lead: any) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.OWNER_SMS_NUMBER;

  if (!sid || !token || !from || !to) {
    return { sent: false, reason: "SMS not configured" };
  }

  const client = twilio(sid, token);

  await client.messages.create({
    from,
    to,
    body: `New ${lead.industry || "general"} lead: ${lead.name || "Unknown"} | ${lead.phone || "No phone"} | ${lead.message || ""}`.slice(0, 1500)
  });

  return { sent: true };
}
