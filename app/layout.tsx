import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "{{SITE_TITLE}}",
    template: "%s — {{SITE_NAME}}",
  },
  description: "{{META_DESCRIPTION}}",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "{{SITE_TITLE}}",
    description: "{{META_DESCRIPTION}}",
    url: siteUrl,
    siteName: "{{SITE_NAME}}",
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}