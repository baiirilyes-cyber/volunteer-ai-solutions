import { Header } from "@/components/Header";
import { Users, Calendar, DollarSign, MessageSquareText } from "lucide-react";

const cards = [
  ["New Leads", "28", Users],
  ["Appointments", "11", Calendar],
  ["Pipeline", "$42,800", DollarSign],
  ["AI Chats", "143", MessageSquareText],
];

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="text-5xl font-black tracking-[-0.05em]">CRM Dashboard</h1>
        <p className="mt-3 text-xl text-slate-300">Owner view for leads, appointments, follow-ups, and pipeline.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {cards.map(([label, value, Icon]: any) => (
            <div className="glass rounded-[2rem] p-6" key={label}>
              <Icon className="mb-4 h-8 w-8 text-orange-300" />
              <div className="text-4xl font-black text-yellow-300">{value}</div>
              <div className="font-bold text-slate-300">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {["New", "Qualified", "Booked", "Follow-Up"].map((stage) => (
            <div className="glass rounded-[2rem] p-5" key={stage}>
              <h2 className="mb-4 text-2xl font-black text-orange-200">{stage}</h2>
              {["Roof leak - urgent", "AC not cooling", "Website strategy call"].map((lead) => (
                <div className="mb-3 rounded-2xl border border-white/10 bg-slate-950 p-4 font-bold text-slate-300" key={lead}>
                  {lead}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
