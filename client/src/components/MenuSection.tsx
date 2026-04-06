/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Fond charbon, cartes de pizzas avec hover lift
 * Catégories filtrables, typographie contrastée
 */

import { useEffect, useRef, useState } from "react";

const PIZZA_VARIETY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519988475/AHNLKfadwD4mpT7XGPmK8P/pizza_variety-LfsTmTerkCZLb4t7wMEJVa.webp";
const PIZZA_SLICE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519988475/AHNLKfadwD4mpT7XGPmK8P/pizza_slice-E4BXDmmeH3Twx6oshYB8VA.webp";
const AMBIANCE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663519988475/AHNLKfadwD4mpT7XGPmK8P/pizzeria_ambiance-4GRJ6fHCtp9Nko8S2qFd7x.webp";

type Category = "Classiques" | "Végétariennes" | "Viandes" | "Spéciales";

interface Pizza {
  name: string;
  description: string;
  category: Category;
  highlight?: boolean;
}

const pizzas: Pizza[] = [
  { name: "Margherita", description: "Sauce tomate, mozzarella, basilic frais", category: "Classiques", highlight: true },
  { name: "Reine", description: "Sauce tomate, mozzarella, jambon, champignons", category: "Classiques" },
  { name: "Napolitaine", description: "Sauce tomate, mozzarella, anchois, câpres, olives", category: "Classiques" },
  { name: "Quatre Saisons", description: "Sauce tomate, mozzarella, jambon, champignons, artichaut, olives", category: "Classiques" },
  { name: "Végétarienne", description: "Sauce tomate, mozzarella, poivrons, courgettes, aubergines, tomates cerises", category: "Végétariennes" },
  { name: "Capricciosa", description: "Sauce tomate, mozzarella, artichauts, olives, câpres, basilic", category: "Végétariennes" },
  { name: "Forestière", description: "Crème fraîche, mozzarella, champignons variés, ail, persil", category: "Végétariennes" },
  { name: "Calzone Végé", description: "Pizza pliée, sauce tomate, mozzarella, épinards, ricotta", category: "Végétariennes" },
  { name: "Pepperoni", description: "Sauce tomate, mozzarella, pepperoni épicé", category: "Viandes", highlight: true },
  { name: "Carnivore", description: "Sauce tomate, mozzarella, jambon, lardons, merguez, bœuf haché", category: "Viandes" },
  { name: "Poulet Basilic", description: "Crème fraîche, mozzarella, poulet grillé, basilic, tomates cerises", category: "Viandes" },
  { name: "Orientale", description: "Sauce tomate, mozzarella, merguez, oignons, harissa", category: "Viandes" },
  { name: "Saumon Fumé", description: "Crème fraîche, mozzarella, saumon fumé, câpres, citron", category: "Spéciales", highlight: true },
  { name: "Chèvre Miel", description: "Crème fraîche, mozzarella, fromage de chèvre, miel, noix, roquette", category: "Spéciales" },
  { name: "Tartiflette", description: "Crème fraîche, reblochon, lardons, pommes de terre, oignons", category: "Spéciales" },
  { name: "Raclette", description: "Crème fraîche, fromage à raclette, lardons, pommes de terre", category: "Spéciales" },
];

const categories: Category[] = ["Classiques", "Végétariennes", "Viandes", "Spéciales"];

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("Classiques");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = pizzas.filter(p => p.category === activeCategory);

  return (
    <section id="carte" ref={ref} className="py-24 bg-[oklch(0.15_0.005_285)] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[oklch(0.42_0.18_27)] font-bold uppercase tracking-widest text-sm mb-3">
            Notre Carte
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            50 pizzas à découvrir
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Chaque pizza est préparée à la commande avec des ingrédients frais et une pâte pétrie maison.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-body font-bold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[oklch(0.42_0.18_27)] text-white shadow-lg shadow-red-900/30"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pizza grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {filtered.map((pizza, i) => (
            <div
              key={pizza.name}
              className={`group flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                pizza.highlight
                  ? "border-[oklch(0.42_0.18_27)]/50 bg-[oklch(0.42_0.18_27)]/10 hover:border-[oklch(0.42_0.18_27)]"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
            >
              {/* Pizza icon circle */}
              <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl ${
                pizza.highlight ? "bg-[oklch(0.42_0.18_27)]" : "bg-white/10"
              }`}>
                🍕
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-white text-lg">{pizza.name}</h3>
                  {pizza.highlight && (
                    <span className="text-xs bg-[oklch(0.42_0.18_27)] text-white px-2 py-0.5 rounded-full font-body font-bold">
                      ★ Populaire
                    </span>
                  )}
                </div>
                <p className="font-body text-white/60 text-sm mt-0.5 leading-relaxed">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-white/40 text-sm italic">
            Carte non exhaustive — 50 pizzas disponibles. Contactez-nous pour la carte complète.
          </p>
        </div>

        {/* Image strip */}
        <div
          className={`mt-16 grid grid-cols-3 gap-4 rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img src={PIZZA_VARIETY} alt="Variété de pizzas" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
          <img src={PIZZA_SLICE} alt="Part de pizza fromage" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
          <img src={AMBIANCE} alt="Ambiance pizzeria" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}
