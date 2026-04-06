/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Hero pleine hauteur avec image de fond, titre Playfair Display massif
 * Overlay sombre pour lisibilité, badges de stats
 */

import { useEffect, useState } from "react";
import { ChevronDown, Star, MapPin, Clock } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519988475/AHNLKfadwD4mpT7XGPmK8P/hero_pizza-AHs2T6n4nT2W5kCoJ6YwNC.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#histoire");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      {/* Warm color tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.42_0.18_27)]/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[oklch(0.42_0.18_27)]/90 text-white text-sm font-body font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Star className="w-4 h-4 fill-current" />
          Pizzeria Artisanale · Saint Jean de Védas
        </div>

        {/* Main title */}
        <h1
          className={`font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white">Ved'as</span>
          <br />
          <span className="text-[oklch(0.42_0.18_27)] italic">Pizza</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          50 succulentes pizzas artisanales, pâte pétrie maison,
          <br className="hidden md:block" />
          produits frais — <strong className="text-white font-bold">ouvert 7 jours sur 7</strong>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:0467814318"
            className="flex items-center gap-2 bg-[oklch(0.42_0.18_27)] text-white px-8 py-4 rounded-full font-body font-bold text-lg hover:bg-[oklch(0.36_0.18_27)] transition-all duration-200 shadow-2xl hover:shadow-red-900/40 hover:-translate-y-1"
          >
            Commander par téléphone
          </a>
          <a
            href="#carte"
            onClick={(e) => { e.preventDefault(); document.querySelector("#carte")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-body font-bold text-lg hover:bg-white/20 transition-all duration-200"
          >
            Voir la carte
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 md:gap-12 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-white/90">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-[oklch(0.72_0.12_65)] text-[oklch(0.72_0.12_65)]" />
              ))}
            </div>
            <span className="font-body font-bold">5/5</span>
            <span className="font-body text-white/60 text-sm">PagesJaunes</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white/90">
            <Star className="w-4 h-4 fill-[oklch(0.72_0.12_65)] text-[oklch(0.72_0.12_65)]" />
            <span className="font-body font-bold">4.2/5</span>
            <span className="font-body text-white/60 text-sm">Google (222 avis)</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4 text-[oklch(0.42_0.18_27)]" />
            <span className="font-body text-sm">Saint Jean de Védas</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-4 h-4 text-[oklch(0.42_0.18_27)]" />
            <span className="font-body text-sm font-bold">Ouvert 7j/7</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
