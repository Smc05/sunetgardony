"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function Kapcsolat() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/kapcsolat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#C88E33] via-[#EBB358] to-[#F9D189]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D1E10] mb-4">
            Kapcsolat
          </h1>
          <p className="text-[#2D1E10]/80 text-lg max-w-2xl mx-auto">
            Bármilyen kérdésed van, szívesen segítünk! Vedd fel velünk a
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
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-sunset-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sunset-dark">Cím</h3>
                    <p className="text-sunset-dark/60">
                      2483 Gárdony, Körösi Csoma Sándor tér 3.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-sunset-orange" />
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
                  <div className="w-12 h-12 bg-sunset-light rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-sunset-orange" />
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
              </div>

              {/* Közösségi média */}
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-sunset-burgundy mb-4">
                Kövess minket
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61566236591438",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 rounded-full bg-sunset-burgundy/10 hover:bg-sunset-orange flex items-center justify-center text-sunset-burgundy hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Üzenetküldő űrlap */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-sunset-gold/10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-6">
                Írj nekünk
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-sunset-orange" />
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                    Köszönjük az üzeneted!
                  </h3>
                  <p className="text-sunset-dark/60">
                    Hamarosan válaszolunk. Addig is nézd meg apartmanunkat!
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
                      placeholder="A neved"
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
                      placeholder="Írd le kérdésed, kérésed..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">
                      Hiba történt az üzenet küldésekor. Kérjük, próbáld újra.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Küldés..." : "Üzenet küldése"}
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
            Hol Találsz Meg Minket?
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
            Várunk szeretettel!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglalj most és élvezd a Velencei-tó csodás naplementéit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com/hotel/hu/sunset-apartment-gardony-for-6-people-with-free-ac-free-parking.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-sunset-orange font-bold rounded-full text-lg hover:bg-sunset-cream transition-all shadow-xl"
            >
              Foglalás a Booking.com-on
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
