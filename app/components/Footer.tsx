export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-emerald-100 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 text-sm text-zinc-600 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-title text-lg font-semibold text-emerald-900">Pesantren Idrisiyyah</p>
          <p className="mt-2">
            Jl. Raya Ciawi No.KM 8 No. 79, Pagendingan, Jatihurip, Kec. Cisayong, Kabupaten
            Tasikmalaya, Jawa Barat 46153
          </p>
          <p className="mt-1">Telp: (0265) 421157</p>
        </div>
        <div className="lg:text-right">
          <p>Social: Facebook · Instagram · YouTube</p>
          <p className="mt-2">© {new Date().getFullYear()} Pesantren Idrisiyyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
