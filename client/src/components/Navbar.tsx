/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Navbar transparente sur hero, fond charbon au scroll
 * Logo: Playfair Display, rouge tomate
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Carte", href: "#carte" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.15_0.005_285)] shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => { e.preventDefault(); handleNavClick("#accueil"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-[oklch(0.42_0.18_27)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-display font-bold text-sm">V</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-[oklch(0.42_0.18_27)]">
                Ved'as
              </span>
              <span className="font-display font-light text-xl text-white ml-1">
                Pizza
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-body text-sm font-medium text-white/80 hover:text-[oklch(0.42_0.18_27)] transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Phone */}
          <a
            href="tel:0467814318"
            className="hidden md:flex items-center gap-2 bg-[oklch(0.42_0.18_27)] text-white px-4 py-2 rounded-full text-sm font-body font-bold hover:bg-[oklch(0.36_0.18_27)] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            04 67 81 43 18
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.15_0.005_285)] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="font-display text-3xl text-white hover:text-[oklch(0.42_0.18_27)] transition-colors duration-200"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:0467814318"
          className="flex items-center gap-2 bg-[oklch(0.42_0.18_27)] text-white px-6 py-3 rounded-full font-body font-bold text-lg mt-4"
        >
          <Phone className="w-5 h-5" />
          04 67 81 43 18
        </a>
      </div>
    </>
  );
}
