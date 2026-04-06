/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Fond crème, cartes d'avis avec étoiles dorées
 * Stats de notes en mise en avant
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Bernard",
    rating: 5,
    date: "15 septembre 2024",
    text: "C'est toujours avec gourmandise que nous dégustons les pizzas qui sont généreuses et faites avec de bons produits frais merci à toute l'équipe pour votre professionnalisme",
    response: "Bonjour Bernard, Un grand merci pour votre élogieux commentaire ! Nous sommes ravis de savoir que nos pizzas vous apportent toujours autant de plaisir. Votre satisfaction est notre plus belle récompense. Au plaisir de vous accueillir à nouveau très bientôt ! Cordialement, Ved'as Pizza.",
  },
  {
    name: "DuboisPujol",
    rating: 5,
    date: "9 janvier 2023",
    text: "Merci à Laurent et son équipe pignanaise qui nous régale régulièrement avec ses pizzas.",
    response: null,
  },
  {
    name: "Enmodea",
    rating: 5,
    date: "6 janvier 2023",
    text: "Meilleures pizzas je recommande fort équipe chaleureuse et c'est un plaisir merci",
    response: null,
  },
  {
    name: "jsurfweb",
    rating: 5,
    date: "23 août 2017",
    text: "Les meilleures pizzas de ST jean (on en a testé plusieurs) : pâte épaisse et légère, très bonne garniture, service rapide. Le top.",
    response: null,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-[oklch(0.72_0.12_65)] text-[oklch(0.72_0.12_65)]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="avis" ref={ref} className="py-24 bg-[oklch(0.15_0.005_285)] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[oklch(0.42_0.18_27)] font-bold uppercase tracking-widest text-sm mb-3">
            Avis Clients
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Ce que disent
            <br />
            <span className="italic text-[oklch(0.42_0.18_27)]">nos clients</span>
          </h2>

          {/* Rating stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-display font-bold text-5xl text-white">5</span>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 fill-[oklch(0.72_0.12_65)] text-[oklch(0.72_0.12_65)]" />
                    ))}
                  </div>
                  <p className="font-body text-white/50 text-xs mt-0.5">7 avis PagesJaunes</p>
                </div>
              </div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-display font-bold text-5xl text-white">4.2</span>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => (
                      <Star key={i} className="w-5 h-5 fill-[oklch(0.72_0.12_65)] text-[oklch(0.72_0.12_65)]" />
                    ))}
                    <Star className="w-5 h-5 fill-[oklch(0.72_0.12_65)]/40 text-[oklch(0.72_0.12_65)]" />
                  </div>
                  <p className="font-body text-white/50 text-xs mt-0.5">222 avis Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[oklch(0.42_0.18_27)]/60 mb-4" />
              
              {/* Review text */}
              <p className="font-body text-white/80 text-base leading-relaxed mb-4 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-bold text-white">{review.name}</p>
                  <p className="font-body text-white/40 text-sm">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Response */}
              {review.response && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="font-body text-xs text-[oklch(0.42_0.18_27)] font-bold mb-1 uppercase tracking-wide">
                    Réponse de l'établissement
                  </p>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quality badges */}
        <div
          className={`mt-12 grid grid-cols-3 gap-4 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Recommande", score: "7/7" },
            { label: "Qualité cuisine", score: "7/7" },
            { label: "Accueil & Service", score: "6/7" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="text-center p-4 rounded-xl bg-[oklch(0.42_0.18_27)]/10 border border-[oklch(0.42_0.18_27)]/20"
            >
              <p className="font-display font-bold text-2xl text-[oklch(0.42_0.18_27)]">{badge.score}</p>
              <p className="font-body text-white/60 text-sm mt-1">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
