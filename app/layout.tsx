import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pesantren-idrisiyyah.vercel.app"),
  title: {
    default: "Pesantren Idrisiyyah | Lembaga Pendidikan Islam di Jawa Barat",
    template: "%s | Pesantren Idrisiyyah",
  },
  description:
    "Website resmi Pesantren Idrisiyyah, lembaga pendidikan Islam di Kabupaten Tasikmalaya, Jawa Barat.",
  keywords: [
    "Pesantren Idrisiyyah",
    "Pendidikan Islam",
    "Pesantren Tasikmalaya",
    "Pesantren Jawa Barat",
    "Sekolah Islam",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Pesantren Idrisiyyah",
    description:
      "Lembaga Pendidikan Islam di Jawa Barat dengan lingkungan belajar modern dan islami.",
    siteName: "Pesantren Idrisiyyah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pesantren Idrisiyyah",
    description:
      "Lembaga Pendidikan Islam di Jawa Barat dengan lingkungan belajar modern dan islami.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${lora.variable} antialiased`}>{children}</body>
    </html>
  );
}

