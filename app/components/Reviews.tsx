type ReviewItem = {
  name: string;
  rating: number;
  text: string;
};

const reviews: ReviewItem[] = [
  {
    name: "Ahmad F.",
    rating: 5,
    text: "Lingkungan pesantren sangat nyaman, tertata, dan pembinaan akhlaknya kuat.",
  },
  {
    name: "Nur A.",
    rating: 5,
    text: "Program pendidikannya seimbang antara ilmu agama, akademik, dan karakter.",
  },
  {
    name: "Siti M.",
    rating: 4,
    text: "Tenaga pengajar ramah dan profesional, fasilitas terus berkembang dengan baik.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <p aria-label={`Rating ${rating} dari 5`} className="text-amber-400">
      {"★".repeat(rating)}
      <span className="text-zinc-300">{"★".repeat(5 - rating)}</span>
    </p>
  );
}

export default function Reviews() {
  return (
    <section id="ulasan" className="section-wrap">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 rounded-xl border border-emerald-100 bg-white p-6 shadow-sm lg:grid-cols-[260px_1fr] fade-up">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Google-style Reviews</p>
            <p className="mt-2 text-4xl font-bold text-emerald-900">4.8</p>
            <Stars rating={5} />
            <p className="mt-2 text-sm text-zinc-600">Total 128 ulasan</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-semibold text-zinc-800">{review.name}</p>
                <div className="mt-2">
                  <Stars rating={review.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
