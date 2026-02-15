export default function CTA() {
  return (
    <section className="section-wrap pt-0">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-700 p-8 text-white shadow-lg sm:p-10 fade-up">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_55%)]" />
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100">
              Call To Action
            </p>
            <h2 className="mt-2 font-title text-2xl font-bold leading-tight sm:text-3xl">
              Daftarkan Putra-Putri Anda di Pesantren Idrisiyyah
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+62265421157"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Hubungi Sekarang
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pesantren+Idrisiyyah+Tasikmalaya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Rute
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
