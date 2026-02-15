import Script from "next/script";

import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Pesantren Idrisiyyah",
    description: "Lembaga Pendidikan Islam di Jawa Barat",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Ciawi No.KM 8 No. 79, Pagendingan, Jatihurip, Kec. Cisayong",
      addressLocality: "Kabupaten Tasikmalaya",
      addressRegion: "Jawa Barat",
      postalCode: "46153",
      addressCountry: "ID",
    },
    telephone: "(0265) 421157",
    url: "https://pesantren-idrisiyyah.vercel.app",
  };

  return (
    <>
      <Script
        id="pesantren-idrisiyyah-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-slate-50 text-zinc-800">
        <Navbar />
        <Hero />
        <InfoSection />
        <Gallery />
        <Reviews />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
