import { Bot, Calendar, ChartNoAxesCombined, Globe, Megaphone, MessageSquareText, Star, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { AiDemo } from "@/components/AiDemo";

const services = [
  ["AI Receptionists", "24/7 AI agents that answer, qualify, capture, and prepare leads.", Bot],
  ["Website Design", "Premium websites that make local businesses look professional.", Globe],
  ["SEO", "Local search systems to help customers find the business on Google.", ChartNoAxesCombined],
  ["Google Ads", "Lead campaigns designed to drive calls, forms, and booked appointments.", Megaphone],
  ["SMS + Email Automation", "Instant owner alerts and customer follow-up workflows.", MessageSquareText],
  ["CRM Dashboards", "Track leads, appointments, pipeline, and revenue opportunities.", Users],
];

export default function Page() {
  return (
    <main>
      <Header />

      <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 font-black text-orange-200">
            Premium AI + Digital Marketing Agency
          </div>
          <h1 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
            AI Employees That Never Miss A <span className="text-orange-400">Customer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-blue-100">
            We build AI receptionists, websites, SEO, Google Ads, CRM dashboards, SMS/email automation, and digital marketing systems for local businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 font-black text-slate-950" href="#demo">Try AI Demo</a>
            <a className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black" href="#contact">Book Free Demo</a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["24/7 AI", "CRM", "SMS", "SEO"].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4" key={item}>
                <div className="text-2xl font-black text-yellow-300">{item}</div>
                <div className="text-sm font-bold text-slate-300">Included</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[2rem] p-5">
          <img src="/logo.png" alt="Volunteer AI Solutions" className="w-full rounded-[1.5rem] bg-white p-5" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 font-black text-orange-200">Trusted Stack</div>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Built Around Tools Businesses Already Trust</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["OpenAI", "Google", "Meta", "Stripe", "Twilio"].map((tool) => (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-xl font-black" key={tool}>{tool}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 font-black text-orange-700">Complete Growth System</div>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Everything A Local Business Needs To Grow</h2>
            <p className="mt-4 text-xl text-slate-600">Not just a chatbot — a full AI and marketing system.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([title, desc, Icon]: any) => (
              <div className="light-card rounded-[2rem] p-8" key={title}>
                <Icon className="mb-4 h-10 w-10 text-orange-500" />
                <h3 className="text-2xl font-black text-blue-900">{title}</h3>
                <p className="mt-3 text-lg text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 font-black text-orange-200">Real AI Receptionist</div>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Industry-Specific AI Demos</h2>
            <p className="mt-4 text-xl text-slate-300">Each assistant only answers questions related to its selected industry.</p>
          </div>
          <AiDemo />
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-5xl font-black tracking-[-0.04em]">Simple Packages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Starter", "$499 setup", "$299/mo", ["AI receptionist", "Website", "Lead capture"]],
              ["Growth", "$999 setup", "$599/mo", ["CRM", "SMS + email", "Google Reviews"]],
              ["Pro", "$1,999 setup", "$999/mo", ["SEO", "Google Ads", "Full automation"]],
            ].map(([name, setup, monthly, items]: any) => (
              <div className="light-card rounded-[2rem] p-8" key={name}>
                <h3 className="text-3xl font-black text-blue-900">{name}</h3>
                <div className="mt-4 text-4xl font-black">{setup}</div>
                <div className="mt-2 font-black text-slate-600">{monthly}</div>
                <ul className="mt-6 space-y-3 text-lg text-slate-700">
                  {items.map((item: string) => <li key={item}>✅ {item}</li>)}
                </ul>
                <a href="#contact" className="mt-7 flex rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 p-4 font-black text-slate-950">Book Strategy Call</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-black tracking-[-0.04em]">Book A Free Strategy Call</h2>
          <p className="mt-5 text-xl text-slate-300">
            Founder: <b>Lassaad Gouadria</b> • <a href="tel:4235345554">(423) 534-5554</a> • <a href="mailto:hello@volunteeraisolutions.com">hello@volunteeraisolutions.com</a>
          </p>
          <form className="glass mt-10 grid gap-4 rounded-[2rem] p-8 text-left">
            <input className="rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="Your name" />
            <input className="rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="Business name" />
            <input className="rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="Phone number" />
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-slate-950 p-4" placeholder="What do you need help with?" />
            <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 p-4 font-black text-slate-950">Send Demo Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
