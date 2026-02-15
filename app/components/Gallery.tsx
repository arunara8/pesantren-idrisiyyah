"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Gallery() {
  const galleryItems = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: `Dokumentasi Kegiatan ${index + 1}`,
      })),
    []
  );
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section id="galeri" className="section-wrap bg-emerald-50/40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl fade-up">
          <p className="section-eyebrow">Galeri</p>
          <h2 className="section-title">Dokumentasi 346+ Foto Kegiatan</h2>
          <p className="section-subtitle">
            Menampilkan aktivitas belajar, ibadah, dan pembinaan karakter di lingkungan Pesantren
            Idrisiyyah.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item.id)}
              className="group relative overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm fade-up"
              style={{ animationDelay: `${index * 70}ms` }}
              aria-label={`Lihat ${item.title}`}
            >
              <Image
                src="/pesantren-placeholder.svg"
                alt={item.title}
                width={600}
                height={450}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-lg bg-emerald-900/70 px-2 py-1 text-xs text-white">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {activeImage !== null && (
          <button
            type="button"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4"
            onClick={() => setActiveImage(null)}
            aria-label="Tutup lightbox"
          >
            <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/20 bg-white">
              <Image
                src="/pesantren-placeholder.svg"
                alt={`Preview Dokumentasi Kegiatan ${activeImage}`}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
