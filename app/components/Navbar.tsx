const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Informasi", href: "#informasi" },
  { label: "Galeri", href: "#galeri" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="font-title text-lg font-semibold text-emerald-900">
          Pesantren Idrisiyyah
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-emerald-900/85 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-emerald-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          Hubungi Kami
        </a>
      </nav>
    </header>
  );
}
