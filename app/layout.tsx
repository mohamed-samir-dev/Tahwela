import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://www.madaar-electronics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "مدار الأجهزة الإلكترونية | أفضل الأجهزة بأعلى جودة وأفضل سعر",
    template: "%s | مدار الأجهزة الإلكترونية",
  },
  description:
    "وجهتكم الأولى لأحدث الأجهزة الإلكترونية والتقنيات المنزلية والمكتبية. نوفر لكم أحدث الابتكارات التقنية من أرقى الماركات العالمية بأفضل الأسعار مع ضمان الجودة.",
  keywords: [
    "أجهزة إلكترونية",
    "تقنية",
    "أجهزة منزلية",
    "مدار",
    "تسوق إلكتروني",
    "أفضل سعر",
    "ماركات عالمية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "مدار الأجهزة الإلكترونية",
    title: "مدار الأجهزة الإلكترونية | أفضل الأجهزة بأعلى جودة وأفضل سعر",
    description:
      "وجهتكم الأولى لأحدث الأجهزة الإلكترونية والتقنيات المنزلية والمكتبية. نوفر لكم أحدث الابتكارات التقنية من أرقى الماركات العالمية.",
    images: [
      {
        url: "https://www.madaar-electronics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مدار الأجهزة الإلكترونية",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدار الأجهزة الإلكترونية | أفضل الأجهزة بأعلى جودة وأفضل سعر",
    description:
      "وجهتكم الأولى لأحدث الأجهزة الإلكترونية والتقنيات المنزلية والمكتبية.",
    images: ["https://www.madaar-electronics.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <head>
        <meta name="theme-color" content="#1a237e" />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
