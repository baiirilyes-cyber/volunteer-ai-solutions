import { Header } from "@/components/Header";
import { Bot, Calendar, CreditCard, Settings, BarChart3, MessageSquare } from "lucide-react";

const items = [
  ["AI Receptionist", "Edit prompts, business hours, and guardrails.", Bot],
  ["Leads", "View and manage captured leads.", MessageSquare],
  ["Calendar", "Manage bookings and appointment requests.", Calendar],
  ["Analytics", "Track calls, leads, conversion, and ROI.", BarChart3],
  ["Billing", "Manage subscription and invoices.", CreditCard],
  ["Settings", "Branding, phone number, email, integrations.", Settings],
];

export default function PortalPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="text-5xl font-black tracking-[-0.05em]">Client Portal</h1>
        <p className="mt-3 text-xl text-slate-300">This is the starter portal every client can log into.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(([title, desc, Icon]: any) => (
            <div className="glass rounded-[2rem] p-7" key={title}>
              <Icon className="mb-4 h-9 w-9 text-orange-300" />
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
