"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Kapcsolat() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Itt lehetne egy API route-ra küldeni
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Kapcsolat
          </h1>
          <p className="text-sunset-cream/70 text-lg max-w-2xl mx-auto">
            Bármilyen kérdése van, szívesen segítünk! Vegye fel velünk a
            kapcsolatot.
          </p>
        </div>
      </section>

      {/* Kapcsolat tartalom */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Elérhetőségek */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-6">
                Elérhetőségeink
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-sunset-dark">Cím</h3>
                    <p className="text-sunset-dark/60">
                      2483 Gárdony, Körösi Csoma Sándor tér 3.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-sunset-dark">Telefon</h3>
                    <a
                      href="tel:+36205349739"
                      className="text-sunset-orange hover:text-sunset-red transition-colors"
                    >
                      +36 20 534 9739
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-sunset-dark">E-mail</h3>
                    <a
                      href="mailto:sunset.gardony@gmail.com"
                      className="text-sunset-orange hover:text-sunset-red transition-colors"
                    >
                      sunset.gardony@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center text-xl shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-sunset-dark">
                      Messenger
                    </h3>
                    <a
                      href="https://m.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sunset-orange hover:text-sunset-red transition-colors"
                    >
                      Írjon nekünk Messengeren – 10% kedvezmény!
                    </a>
                  </div>
                </div>
              </div>

              {/* Közösségi média */}
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-sunset-burgundy mb-4">
                Kövessen minket
              </h3>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", icon: "f", href: "https://facebook.com" },
                  {
                    name: "Instagram",
                    icon: "📷",
                    href: "https://instagram.com",
                  },
                  { name: "YouTube", icon: "▶", href: "https://youtube.com" },
                  { name: "TikTok", icon: "♪", href: "https://tiktok.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 rounded-full bg-sunset-burgundy/10 hover:bg-sunset-orange flex items-center justify-center text-sunset-burgundy hover:text-white transition-all font-bold"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Üzenetküldő űrlap */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-sunset-gold/10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-6">
                Írjon nekünk
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                    Köszönjük üzenetét!
                  </h3>
                  <p className="text-sunset-dark/60">
                    Hamarosan válaszolunk. Addig is nézze meg ajánlatainkat!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sunset-orange hover:text-sunset-red font-semibold transition-colors"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-sunset-dark mb-1"
                    >
                      Név *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-sunset-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 focus:border-sunset-orange bg-sunset-cream/50"
                      placeholder="Az Ön neve"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-sunset-dark mb-1"
                    >
                      E-mail cím *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-sunset-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 focus:border-sunset-orange bg-sunset-cream/50"
                      placeholder="pelda@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-sunset-dark mb-1"
                    >
                      Telefonszám
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-sunset-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 focus:border-sunset-orange bg-sunset-cream/50"
                      placeholder="+36 30 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-sunset-dark mb-1"
                    >
                      Üzenet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-sunset-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 focus:border-sunset-orange bg-sunset-cream/50 resize-none"
                      placeholder="Írja le kérdését, kérését..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg text-lg"
                  >
                    Üzenet küldése
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Térkép */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy text-center mb-4">
            Hol Találhat Meg?
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="aspect-[16/9] bg-sunset-dark/5 rounded-2xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=K%C3%B6r%C3%B6si+Csoma+S%C3%A1ndor+t%C3%A9r+3%2C+2483+G%C3%A1rdony%2C+Hungary&output=embed&z=17&hl=hu"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunset Apartment Gárdony térképen"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Várjuk szeretettel!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglaljon most és élvezze a Velencei-tó legszebb naplementéit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-sunset-orange font-bold rounded-full text-lg hover:bg-sunset-cream transition-all shadow-xl"
            >
              Foglalás a Booking.com-on
            </a>
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-sunset-orange font-bold rounded-full text-lg transition-all"
            >
              💬 Messenger – 10% kedvezmény
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
