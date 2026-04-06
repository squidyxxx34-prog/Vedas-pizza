/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Footer charbon avec logo, liens et infos légales
 */

import { Phone, MapPin, Clock, Facebook } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.10_0.003_285)] text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[oklch(0.42_0.18_27)] flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-lg">V</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-[oklch(0.42_0.18_27)]">Ved'as</span>
                <span className="font-display font-light text-2xl text-white ml-1">Pizza</span>
              </div>
            </div>
            <p className="font-body text-white/60 leading-relaxed max-w-sm mb-6">
              Pizzeria artisanale à Saint Jean de Védas. 50 succulentes pizzas préparées avec des produits frais 
              et une pâte pétrie maison. Ouvert 7 jours sur 7.
            </p>
            <a
              href="tel:0467814318"
              className="inline-flex items-center gap-2 bg-[oklch(0.42_0.18_27)] text-white px-6 py-3 rounded-full font-body font-bold hover:bg-[oklch(0.36_0.18_27)] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              04 67 81 43 18
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Notre Carte", href: "#carte" },
                { label: "Notre Histoire", href: "#histoire" },
                { label: "Avis Clients", href: "#avis" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-body text-white/60 hover:text-[oklch(0.42_0.18_27)] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[oklch(0.42_0.18_27)] mt-0.5 flex-shrink-0" />
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Quartier Roque Fraisse<br />
                  Avenue Librilla<br />
                  34430 Saint Jean de Védas
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[oklch(0.42_0.18_27)]" />
                <a href="tel:0467814318" className="font-body text-white/60 text-sm hover:text-white transition-colors">
                  04 67 81 43 18
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[oklch(0.42_0.18_27)]" />
                <p className="font-body text-white/60 text-sm">
                  Lun–Dim : 11h–13h30 / 19h–22h30
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400" />
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/60 text-sm hover:text-blue-400 transition-colors"
                >
                  Suivez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-sm">
            © {new Date().getFullYear()} Ved'as Pizza · Saint Jean de Védas · Tous droits réservés
          </p>
          <p className="font-body text-white/30 text-xs">
            Restauration rapide · Pizzas artisanales · Livraison à domicile
          </p>
        </div>
      </div>
    </footer>
  );
}
