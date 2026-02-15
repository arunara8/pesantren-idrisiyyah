import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_#d1fae5,_#f8fafc)]" />
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bg-hero.webp"
          alt="Suasana Pesantren Idrisiyyah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/75 via-emerald-900/70 to-emerald-900/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-emerald-100/40 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-50">
            Website Resmi
          </p>
          <h1 className="font-title text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Pesantren Idrisiyyah
          </h1>
          <p className="mt-4 text-base text-emerald-50/95 sm:text-lg">
            Lembaga Pendidikan Islam di Jawa Barat
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
            Mencetak Generasi Qurani, Berakhlak, dan Berdaya Saing
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/90 sm:text-base">
            Pesantren Idrisiyyah menghadirkan pendidikan Islam terpadu dengan pembinaan akhlak,
            pendalaman ilmu syariah, dan penguatan karakter untuk masa depan putra-putri Anda.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="glass-card fade-up" style={{ animationDelay: "100ms" }}>
              <p className="text-sm text-emerald-100">346+ Foto</p>
            </div>
            <div className="glass-card fade-up" style={{ animationDelay: "200ms" }}>
              <p className="text-sm text-emerald-100">Kabupaten Tasikmalaya</p>
            </div>
            <div className="glass-card fade-up" style={{ animationDelay: "300ms" }}>
              <p className="text-sm text-emerald-100">Provinsi Jawa Barat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
