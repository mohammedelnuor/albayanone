import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Bayan Construction",
  description: "Al-Bayan Construction General Contracting Establishment - Your partner in construction, from foundation to finishing.",
  keywords: ["construction", "contracting", "civil works", "architectural works", "infrastructure", "building", "Al-Bayan"],
  authors: [{ name: "Al-Bayan Construction" }],
  creator: "Al-Bayan Construction",
  publisher: "Al-Bayan Construction",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://al-bayan.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: "Al-Bayan Construction",
    description: "Al-Bayan Construction General Contracting Establishment - Your partner in construction, from foundation to finishing.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://al-bayan.com',
    siteName: "Al-Bayan Construction",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Al-Bayan Construction Logo",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Bayan Construction",
    description: "Al-Bayan Construction General Contracting Establishment - Your partner in construction, from foundation to finishing.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
};