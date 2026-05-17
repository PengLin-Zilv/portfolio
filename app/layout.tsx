import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  
export const metadata: Metadata = {
  title: {
    default: "Peng Lin — AI Researcher",
    template: "%s — Peng Lin",
  },
  description: "Peng Lin — CS @ Syracuse, research on LLM reasoning and neurosymbolic AI at the Leibniz Lab. Open to Spring/Summer 2027 AI Engineer & SWE internships.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Peng Lin — Software Engineer & AI Researcher",
    description: "Peng Lin — CS @ Syracuse, research on LLM reasoning and neurosymbolic AI at the Leibniz Lab. Open to Spring/Summer 2027 AI Engineer & SWE internships.",
    url: siteUrl,
    siteName: "Peng Lin",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main id="main" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}