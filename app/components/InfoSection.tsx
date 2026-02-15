type InfoItem = {
  icon: string;
  title: string;
  value: string;
};

const infoItems: InfoItem[] = [
  {
    icon: "📍",
    title: "Alamat",
    value:
      "Jl. Raya Ciawi No.KM 8 No. 79, Pagendingan, Jatihurip, Kec. Cisayong, Kabupaten Tasikmalaya, Jawa Barat 46153",
  },
  {
    icon: "🕒",
    title: "Jam Operasional",
    value: "Buka · Tutup pukul 16.00",
  },
  {
    icon: "📞",
    title: "Telepon",
    value: "(0265) 421157",
  },
  {
    icon: "🗺",
    title: "Provinsi",
    value: "Jawa Barat",
  },
];

export default function InfoSection() {
  return (
    <section id="informasi" className="section-wrap">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="profil" className="mb-10 max-w-2xl fade-up">
          <p className="section-eyebrow">Profil</p>
          <h2 className="section-title">Informasi Umum Pesantren Idrisiyyah</h2>
          <p className="section-subtitle">
            Informasi resmi untuk calon santri, wali santri, dan masyarakat yang ingin mengenal lebih
            dekat Pesantren Idrisiyyah.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {infoItems.map((item, index) => (
            <article
              key={item.title}
              className="card fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-2xl" aria-hidden>
                {item.icon}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-emerald-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "360ms" }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pesantren+Idrisiyyah+Tasikmalaya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Lihat di Google Maps
          </a>
          <a href="tel:+62265421157" className="btn-secondary">
            Telepon Sekarang
          </a>
        </div>

        <div
          className="mt-6 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm fade-up"
          style={{ animationDelay: "440ms" }}
        >
          <iframe
            title="Lokasi Pesantren Idrisiyyah di Kabupaten Tasikmalaya"
            src="https://www.google.com/maps?q=Pesantren+Idrisiyyah+Tasikmalaya&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
