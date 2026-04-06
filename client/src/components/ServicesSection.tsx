/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Section services avec fond crème, cards asymétriques
 * Icônes expressives, offre spéciale mise en avant
 */

import { useEffect, useRef, useState } from "react";
import { UtensilsCrossed, ShoppingBag, Truck, Wine, Salad, IceCream } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Sur place",
    description: "Savourez vos pizzas dans notre salle chaleureuse, dans une ambiance conviviale et authentique.",
    colorClass: "text-[oklch(0.42_0.18_27)]",
    bgClass: "bg-[oklch(0.42_0.18_27)]/10",
  },
  {
    icon: ShoppingBag,
    title: "À emporter",
    description: "Commandez par téléphone et venez récupérer vos pizzas fraîchement préparées.",
    colorClass: "text-[oklch(0.38_0.1_145)]",
    bgClass: "bg-[oklch(0.38_0.1_145)]/10",
  },
  {
    icon: Truck,
    title: "Livraison",
    description: "Nous livrons vos pizzas à domicile ou au bureau. Commandez par téléphone.",
    colorClass: "text-[oklch(0.72_0.12_65)]",
    bgClass: "bg-[oklch(0.72_0.12_65)]/10",
  },
];

const accompaniments = [
  { icon: Wine, label: "Boissons" },
  { icon: Salad, label: "Salades" },
  { icon: IceCream, label: "Glaces" },
];

export default function ServicesSection() {
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
    <section className="py-24 bg-[oklch(0.98_0.015_80)] overflow-hidden" ref={ref}>
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[oklch(0.42_0.18_27)] font-bold uppercase tracking-widest text-sm mb-3">
            Nos Services
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[oklch(0.15_0.005_285)] leading-tight">
            Régalez-vous,
            <br />
            <span className="italic text-[oklch(0.42_0.18_27)]">où que vous soyez</span>
          </h2>
        </div>

        {/* Services cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl bg-white border border-[oklch(0.88_0.02_80)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.bgClass}`}
              >
                <service.icon
                  className={`w-8 h-8 ${service.colorClass}`}
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-[oklch(0.15_0.005_285)] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-[oklch(0.52_0.01_285)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accompaniments */}
        <div
          className={`bg-[oklch(0.15_0.005_285)] rounded-2xl p-8 md:p-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                Pour accompagner vos pizzas
              </h3>
              <p className="font-body text-white/60">
                Nous proposons également des accompagnements pour compléter votre repas.
              </p>
            </div>
            <div className="flex gap-6">
              {accompaniments.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.42_0.18_27)]/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[oklch(0.42_0.18_27)]" />
                  </div>
                  <span className="font-body text-white/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offre spéciale */}
        <div
          className={`mt-8 bg-gradient-to-r from-[oklch(0.42_0.18_27)] to-[oklch(0.36_0.18_27)] rounded-2xl p-8 text-center text-white transition-all duration-700 delay-400 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="font-body text-white/80 uppercase tracking-widest text-sm font-bold mb-2">
            Offre Spéciale
          </p>
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-3">
            🎉 8 pizzas achetées = 1 offerte !
          </h3>
          <p className="font-body text-white/80 text-lg">
            Profitez de notre offre fidélité. Renseignez-vous auprès de notre équipe.
          </p>
          <a
            href="tel:0467814318"
            className="inline-block mt-6 bg-white text-[oklch(0.42_0.18_27)] px-8 py-3 rounded-full font-body font-bold text-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
          >
            Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
