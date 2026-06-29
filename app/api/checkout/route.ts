import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const { plan } = await req.json();

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const price =
    plan === "growth" ? process.env.STRIPE_GROWTH_PRICE_ID :
    plan === "pro" ? process.env.STRIPE_PRO_PRICE_ID :
    process.env.STRIPE_STARTER_PRICE_ID;

  if (!price) {
    return NextResponse.json({ error: "Missing Stripe price ID" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price, quantity: 1 }],
    success_url: `${siteUrl}/portal?payment=success`,
    cancel_url: `${siteUrl}/#pricing?payment=cancel`
  });

  return NextResponse.json({ url: session.url });
}
