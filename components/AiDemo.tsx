"use client";

import { useState } from "react";
import { industries, type IndustryKey } from "@/lib/industries";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const industryOrder: IndustryKey[] = ["roofing", "hvac", "auto", "dental", "plumbing", "law", "marketing"];

export function AiDemo() {
  const [industry, setIndustry] = useState<IndustryKey>("roofing");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: industries.roofing.prompt.includes("roofing") ? "Hello! This is the Roofing AI demo. I can help with roof leaks, storm damage, inspections, and estimates. How can I help?" : "Hello! How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("Ready");
  const [loading, setLoading] = useState(false);

  function switchIndustry(next: IndustryKey) {
    setIndustry(next);
    setMessages([
      {
        role: "assistant",
        content: `Hello! This is the ${industries[next].label} AI demo. I can help with ${industries[next].services}. How can I help?`
      }
    ]);
    setStatus("Ready");
  }

  async function send() {
    const clean = input.trim();
    if (!clean || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setStatus("Thinking...");

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ industry, messages: nextMessages })
    });

    const data = await response.json();

    setMessages([...nextMessages, { role: "assistant", content: data.reply || "I can help. Please share more details." }]);
    setStatus(data.status || "Ready");
    setLoading(false);
  }

  return (
    <div className="grid gap-7 lg:grid-cols-[320px_1fr]">
      <aside className="glass rounded-[2rem] p-6">
        <h3 className="mb-5 text-2xl font-black text-orange-200">Choose AI Demo</h3>
        <div className="space-y-3">
          {industryOrder.map((key) => (
            <button
              key={key}
              onClick={() => switchIndustry(key)}
              className={`w-full rounded-2xl border p-4 text-left font-black transition ${
                industry === key
                  ? "border-orange-300 bg-gradient-to-r from-orange-500 to-yellow-400 text-slate-950"
                  : "border-white/10 bg-slate-950 text-white hover:border-orange-300"
              }`}
            >
              <span className="text-xl">{industries[key].emoji} {industries[key].label} AI</span>
              <span className="mt-1 block text-xs opacity-75">{industries[key].services}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <h4 className="mb-3 text-xl font-black text-orange-200">Guardrails</h4>
          <ul className="space-y-2 text-sm font-bold text-slate-300">
            <li>✅ Answers only selected industry</li>
            <li>✅ Rejects wrong industry questions</li>
            <li>✅ Collects lead details</li>
            <li>✅ Prepares CRM record</li>
            <li>✅ Ready for SMS/email alerts</li>
          </ul>
        </div>
      </aside>

      <section className="glass rounded-[2rem] p-6">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-black">{industries[industry].emoji} {industries[industry].label} AI Receptionist</h3>
            <p className="mt-1 text-slate-400">{industries[industry].services}</p>
          </div>
          <span className="rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 font-black text-green-300">● Live Demo</span>
        </div>

        <div className="h-[540px] overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-5">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 max-w-[88%] rounded-2xl p-4 text-base ${
                message.role === "user"
                  ? "ml-auto bg-gradient-to-r from-orange-500 to-yellow-400 font-bold text-slate-950"
                  : "bg-blue-950/70 text-white"
              }`}
            >
              <b>{message.role === "user" ? "Customer: " : "AI Receptionist: "}</b>
              {message.content}
            </div>
          ))}
          {loading && <div className="mb-4 max-w-[88%] rounded-2xl bg-blue-950/70 p-4">AI is thinking...</div>}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            className="rounded-2xl border border-white/10 bg-slate-950 p-4"
            value={input}
            placeholder="Type like a customer..."
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && send()}
          />
          <button onClick={send} className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-4 font-black text-slate-950">
            Send
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 font-bold text-slate-300">
          Status: <span className="text-orange-200">{status}</span>
        </div>
      </section>
    </div>
  );
}
