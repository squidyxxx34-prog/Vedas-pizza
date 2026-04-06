/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Section informations pratiques : horaires, paiement, carte
 * Fond crème, layout asymétrique
 */

import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Phone, CreditCard, Facebook, Globe, Mail } from "lucide-react";

const hours = [
  { day: "Lundi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Mardi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Mercredi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Jeudi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Vendredi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Samedi", hours: "11h00 – 13h30 / 19h00 – 22h30" },
  { day: "Dimanche", hours: "11h00 – 13h30 / 19h00 – 22h30" },
];

const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);

export default function InfoSection() {
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
    <section id="contact" ref={ref} className="py-24 bg-[oklch(0.98_0.015_80)] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[oklch(0.42_0.18_27)] font-bold uppercase tracking-widest text-sm mb-3">
            Informations Pratiques
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[oklch(0.15_0.005_285)] leading-tight">
            Venez nous rendre visite
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Horaires */}
          <div
            className={`lg:col-span-1 bg-[oklch(0.15_0.005_285)] rounded-2xl p-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.42_0.18_27)] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Horaires</h3>
            </div>
            <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-[oklch(0.38_0.1_145)]/20 border border-[oklch(0.38_0.1_145)]/30">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.38_0.1_145)] animate-pulse" />
              <span className="font-body text-[oklch(0.38_0.1_145)] text-sm font-bold">Ouvert 7 jours sur 7</span>
            </div>
            <div className="space-y-2">
              {hours.map((h) => {
                const isToday = h.day === todayCapitalized;
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      isToday
                        ? "bg-[oklch(0.42_0.18_27)]/20 border border-[oklch(0.42_0.18_27)]/40"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span className={`font-body text-sm font-medium ${isToday ? "text-[oklch(0.42_0.18_27)]" : "text-white/70"}`}>
                      {h.day}
                      {isToday && <span className="ml-2 text-xs font-bold">(Aujourd'hui)</span>}
                    </span>
                    <span className={`font-body text-xs ${isToday ? "text-white" : "text-white/50"}`}>
                      {h.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div
              className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Phone */}
              <a
                href="tel:0467814318"
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-[oklch(0.88_0.02_80)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[oklch(0.42_0.18_27)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs text-[oklch(0.52_0.01_285)] uppercase tracking-wide font-bold mb-0.5">Téléphone</p>
                  <p className="font-display font-bold text-lg text-[oklch(0.15_0.005_285)]">04 67 81 43 18</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[oklch(0.88_0.02_80)] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.38_0.1_145)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-body text-xs text-[oklch(0.52_0.01_285)] uppercase tracking-wide font-bold mb-0.5">Adresse</p>
                  <p className="font-body text-sm text-[oklch(0.15_0.005_285)] leading-tight">
                    Quartier Roque Fraisse<br />
                    Avenue Librilla<br />
                    34430 Saint Jean de Védas
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[oklch(0.88_0.02_80)] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.72_0.12_65)]/20 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-[oklch(0.72_0.12_65)]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[oklch(0.52_0.01_285)] uppercase tracking-wide font-bold mb-1">Paiement accepté</p>
                  <div className="flex gap-2 flex-wrap">
                    {["Visa", "CB", "Mastercard", "Titre restaurant"].map(m => (
                      <span key={m} className="text-xs bg-[oklch(0.94_0.015_80)] text-[oklch(0.35_0.01_285)] px-2 py-0.5 rounded font-body font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[oklch(0.88_0.02_80)] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-body text-xs text-[oklch(0.52_0.01_285)] uppercase tracking-wide font-bold mb-1">Suivez-nous</p>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div
              className={`rounded-2xl overflow-hidden shadow-lg border border-[oklch(0.88_0.02_80)] transition-all duration-700 delay-300 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <iframe
                title="Localisation Ved'as Pizza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d3.8350!3d43.5750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6b2b2b2b2b2b2%3A0x0!2sSaint-Jean-de-V%C3%A9das%2C+34430!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
