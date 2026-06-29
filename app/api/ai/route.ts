import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { detectWrongIndustry, industries, type IndustryKey } from "@/lib/industries";

const bodySchema = z.object({
  industry: z.string(),
  messages: z.array(z.object({
    role: z.enum(["assistant", "user"]),
    content: z.string()
  }))
});

function fallbackReply(industry: IndustryKey, userText: string) {
  const wrong = detectWrongIndustry(industry, userText);

  if (wrong) {
    return {
      reply: `This is the ${industries[industry].label} AI demo, so I can only help with ${industries[industry].services}. Please choose the ${industries[wrong].label} AI demo for that request.`,
      status: "Wrong industry rejected"
    };
  }

  if (/^(hi|hello|hey)$/i.test(userText.trim())) {
    return {
      reply: `Hello! This is the ${industries[industry].label} AI demo. I can help with ${industries[industry].services}. What do you need help with today?`,
      status: "Greeting handled"
    };
  }

  return {
    reply: `I can help with ${industries[industry].services}. To prepare this request, may I have your full name, best phone number, and preferred appointment time?`,
    status: "Lead qualification started"
  };
}

export async function POST(req: Request) {
  try {
    const body = bodySchema.parse(await req.json());
    const industry = (body.industry in industries ? body.industry : "marketing") as IndustryKey;
    const lastUserMessage = [...body.messages].reverse().find((message) => message.role === "user")?.content || "";

    const wrong = detectWrongIndustry(industry, lastUserMessage);
    if (wrong) {
      return NextResponse.json({
        reply: `This is the ${industries[industry].label} AI demo, so I can only help with ${industries[industry].services}. Please choose the ${industries[wrong].label} AI demo for that request.`,
        status: "Wrong industry rejected"
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(fallbackReply(industry, lastUserMessage));
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `${industries[industry].prompt}\n\nSTRICT RULE: ${industries[industry].guardrail}\nIf the customer asks about a different industry, politely refuse and tell them to choose the correct demo.`
        },
        ...body.messages.map((message) => ({
          role: message.role as "assistant" | "user",
          content: message.content
        }))
      ],
      max_output_tokens: 300
    });

    return NextResponse.json({
      reply: response.output_text,
      status: "OpenAI response"
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "AI request failed" }, { status: 400 });
  }
}
