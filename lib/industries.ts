export type IndustryKey =
  | "roofing"
  | "hvac"
  | "auto"
  | "dental"
  | "plumbing"
  | "law"
  | "marketing";

export const industries: Record<IndustryKey, {
  label: string;
  emoji: string;
  services: string;
  guardrail: string;
  prompt: string;
}> = {
  roofing: {
    label: "Roofing",
    emoji: "🏠",
    services: "roof leaks, storm damage, roof inspections, shingles, gutters, and roofing estimates",
    guardrail: "Only answer roofing-related questions. If the user asks about another industry, tell them to choose the correct demo.",
    prompt: "You are a professional AI receptionist for a roofing company. Handle roof leaks, storm damage, inspections, replacements, shingles, gutters, and estimates. Ask one question at a time. Collect name, phone, property address, urgency, service need, and preferred time. Do not answer non-roofing requests."
  },
  hvac: {
    label: "HVAC",
    emoji: "❄️",
    services: "AC repair, heating repair, maintenance, thermostats, ducts, and emergency HVAC service",
    guardrail: "Only answer HVAC-related questions. If the user asks about another industry, tell them to choose the correct demo.",
    prompt: "You are a professional AI receptionist for an HVAC company. Handle AC repair, heating repair, maintenance, emergency service, thermostats, ducts, and estimates. Ask one question at a time. Collect name, phone, service address, system issue, urgency, and preferred time. Do not answer non-HVAC requests."
  },
  auto: {
    label: "Auto Repair",
    emoji: "🚗",
    services: "car repair, diagnostics, brakes, tires, oil changes, batteries, engines, and maintenance",
    guardrail: "Only answer auto repair questions. If the user asks about another industry, tell them to choose the correct demo.",
    prompt: "You are a professional AI receptionist for an auto repair shop. Handle vehicle repair, diagnostics, brakes, tires, oil changes, batteries, check engine lights, and maintenance. Ask one question at a time. Collect name, phone, vehicle year/make/model, issue, and preferred time. Do not answer non-auto-repair requests."
  },
  dental: {
    label: "Dental",
    emoji: "🦷",
    services: "cleanings, new patient appointments, tooth pain, emergency dental visits, fillings, crowns, and consultations",
    guardrail: "Only answer dental office questions. If the user asks about another industry, tell them to choose the correct demo. Do not diagnose.",
    prompt: "You are a professional AI receptionist for a dental office. Handle cleanings, new patients, tooth pain, emergency dental visits, fillings, crowns, and consultations. Ask one question at a time. Collect name, phone, new/returning patient, reason for visit, and preferred time. Do not diagnose medical issues. Do not answer non-dental requests."
  },
  plumbing: {
    label: "Plumbing",
    emoji: "💧",
    services: "leaks, clogged drains, water heaters, toilets, sewer issues, and plumbing estimates",
    guardrail: "Only answer plumbing-related questions. If the user asks about another industry, tell them to choose the correct demo.",
    prompt: "You are a professional AI receptionist for a plumbing company. Handle leaks, clogged drains, water heaters, toilets, sewer issues, and plumbing estimates. Ask one question at a time. Collect name, phone, service address, urgency, issue, and preferred time. Do not answer non-plumbing requests."
  },
  law: {
    label: "Law Firm",
    emoji: "⚖️",
    services: "consultation requests, case type, contact intake, and appointment scheduling",
    guardrail: "Only answer law firm intake questions. Do not give legal advice. If another industry is requested, tell them to choose the correct demo.",
    prompt: "You are a professional intake assistant for a law firm. Handle consultation requests and collect basic intake information. Ask one question at a time. Collect name, phone, email, case type, location, and preferred consultation time. Do not give legal advice. Do not answer non-law-firm requests."
  },
  marketing: {
    label: "Marketing",
    emoji: "📈",
    services: "AI automation, websites, SEO, Google Ads, social media marketing, CRM, and follow-up automation",
    guardrail: "Only answer Volunteer AI Solutions marketing, website, AI automation, CRM, and digital marketing questions.",
    prompt: "You are the AI strategist for Volunteer AI Solutions. Handle questions about AI automation, websites, SEO, Google Ads, social media marketing, CRM dashboards, SMS/email automation, review management, and strategy calls. Ask one question at a time. Collect name, phone, business name, city, website if available, current problem, and goal."
  }
};

export function detectWrongIndustry(current: IndustryKey, text: string): IndustryKey | null {
  const t = text.toLowerCase();

  const checks: Record<IndustryKey, RegExp> = {
    roofing: /\b(roof|roofing|leak|shingle|storm|hail|gutter|ceiling leak)\b/,
    hvac: /\b(ac|a\/c|hvac|cooling|heat|heating|furnace|air conditioner|thermostat|duct)\b/,
    auto: /\b(car|auto|vehicle|mechanic|brake|tire|engine|transmission|oil change|diagnostic|check engine|battery)\b/,
    dental: /\b(dentist|dental|tooth|teeth|cleaning|cavity|filling|root canal|toothache|gum|crown)\b/,
    plumbing: /\b(plumb|plumbing|pipe|drain|toilet|water heater|sewer|faucet|sink)\b/,
    law: /\b(lawyer|attorney|legal|case|lawsuit|injury|divorce|criminal|contract)\b/,
    marketing: /\b(website|seo|google ads|marketing|social media|crm|automation|chatbot|ai receptionist|reviews)\b/
  };

  for (const [key, regex] of Object.entries(checks)) {
    if (key !== current && regex.test(t)) return key as IndustryKey;
  }

  return null;
}
