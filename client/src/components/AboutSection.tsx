/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Section asymétrique image/texte, fond crème chaud
 * Éléments décoratifs circulaires, typographie Playfair
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Leaf, Flame, Users } from "lucide-react";

const MAKING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519988475/AHNLKfadwD4mpT7XGPmK8P/pizza_making-78JHkQ8KYWVbs3UKAG4QZT.webp";

const features = [
  {
    icon: Leaf,
    title: "Produits frais",
    desc: "Légumes frais et ingrédients de qualité sélectionnés avec soin chaque jour.",
  },
  {
    icon: Flame,
    title: "Pâte maison",
    desc: "Pâte pétrie dans notre laboratoire selon notre recette artisanale.",
  },
  {
    icon: Users,
    title: "Équipe passionnée",
    desc: "Laurent et son équipe vous accueillent avec chaleur et professionnalisme.",
  },
  {
    icon: CheckCircle2,
    title: "50 pizzas au choix",
    desc: "Un choix exceptionnel pour satisfaire toutes les envies et tous les palais.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="histoire" ref={ref} className="py-24 bg-[oklch(0.98_0.015_80)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Decorative circle behind */}
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-[oklch(0.42_0.18_27)]/10 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[oklch(0.38_0.1_145)]/10 -z-10" />
            
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={MAKING_IMAGE}
                alt="Préparation artisanale de la pâte à pizza"
                className="w-full h-[500px] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-[oklch(0.15_0.005_285)]/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl">
                <p className="font-display font-bold text-2xl text-[oklch(0.42_0.18_27)]">50+</p>
                <p className="font-body text-sm text-white/80">pizzas au choix</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="font-body text-[oklch(0.42_0.18_27)] font-bold uppercase tracking-widest text-sm mb-3">
              Notre Histoire
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[oklch(0.15_0.005_285)] leading-tight mb-6">
              L'art de la pizza
              <br />
              <span className="italic text-[oklch(0.42_0.18_27)]">artisanale</span>
            </h2>
            <p className="font-body text-[oklch(0.35_0.01_285)] text-lg leading-relaxed mb-6">
              Chez Ved'as Pizza, nous préparons pour vous <strong>50 succulentes pizzas</strong> au choix. 
              Nous pétrissons la pâte dans notre laboratoire et utilisons des produits maison 
              ainsi que des légumes frais.
            </p>
            <p className="font-body text-[oklch(0.35_0.01_285)] text-lg leading-relaxed mb-10">
              Savourez nos pizzas <strong>sur place</strong> dans un cadre chaleureux, 
              <strong> à emporter</strong> ou profitez de notre service de <strong>livraison</strong> à 
              votre domicile ou au bureau. Boissons, salades et glaces complètent notre carte.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-[oklch(0.88_0.02_80)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.42_0.18_27)]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[oklch(0.42_0.18_27)]" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-[oklch(0.15_0.005_285)] text-sm">{f.title}</p>
                    <p className="font-body text-[oklch(0.52_0.01_285)] text-xs leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
