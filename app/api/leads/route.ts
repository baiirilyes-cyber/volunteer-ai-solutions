import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { sendLeadEmail, sendLeadSms } from "@/lib/notifications";

const leadSchema = z.object({
  client_id: z.string().optional(),
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  business: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().optional(),
  urgency: z.string().optional(),
  status: z.string().optional()
});

export async function POST(req: Request) {
  const lead = leadSchema.parse(await req.json());

  try {
    const supabase = supabaseAdmin();
    const { data, error } = await supabase.from("leads").insert({
      ...lead,
      status: lead.status || "new"
    }).select().single();

    if (error) throw error;

    await Promise.allSettled([sendLeadEmail(data), sendLeadSms(data)]);

    return NextResponse.json({ ok: true, lead: data });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = supabaseAdmin();
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(100);

    if (error) throw error;

    return NextResponse.json({ leads: data });
  } catch (error: any) {
    return NextResponse.json({ leads: [], error: error.message }, { status: 500 });
  }
}
