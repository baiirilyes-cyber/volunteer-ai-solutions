import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer AI Solutions | AI Automation + Digital Marketing",
  description: "AI receptionists, websites, SEO, Google Ads, CRM automation, SMS/email follow-up, and digital marketing systems for local businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
