import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajánlataink | Sunset Apartment Gárdony",
  description:
    "Akciós csomagok és kedvezményes ajánlatok a Sunset Gardony apartmanban. Romantikus csomag, Messenger kedvezmény és szezonális akciók.",
};

export default function Ajanlataink() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Ajánlataink
          </h1>
          <p className="text-sunset-cream/70 text-lg max-w-2xl mx-auto">
            Különleges kedvezmények és csomagok, hogy az Ön pihenése még
            emlékezetesebb legyen.
          </p>
        </div>
      </section>

      {/* Ajánlatok */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Romantikus ajánlat */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sunset-gold/20 relative">
              <div className="absolute top-4 right-4 bg-sunset-red text-white px-4 py-1 rounded-full text-sm font-bold">
                -10%
              </div>
              <div className="h-48 bg-gradient-to-br from-sunset-burgundy to-sunset-red flex items-center justify-center">
                <span className="text-7xl">💑</span>
              </div>
              <div className="p-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-2">
                  Romantikus Csomag
                </h2>
                <p className="text-sunset-orange font-semibold mb-4">
                  2 fő részére | -10% kedvezmény
                </p>
                <p className="text-sunset-dark/70 leading-relaxed mb-6">
                  Tökéletes ajánlat pároknak! Foglaljon Messengeren keresztül és
                  automatikusan 10% kedvezményt kap a Booking.com-os árhoz
                  képest. Élvezze a naplementét kettesben, és teremtsen
                  feledhetetlen emlékeket.
                </p>

                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold text-sunset-dark">
                    A csomag tartalmazhatja:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "10% kedvezmény a szoba árából",
                      "Üdvözlő pezsgő érkezéskor",
                      "Romantikus szobadekoráció",
                      "Késői kijelentkezés (igény szerint)",
                      "Naplementés terasz csak Önöknek",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-sunset-dark/70"
                      >
                        <span className="text-sunset-gold">♥</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-sunset-burgundy hover:bg-sunset-red text-white font-bold rounded-full transition-all shadow-lg text-lg"
                >
                  💬 Foglalás Messengeren – 10% kedvezmény
                </a>
              </div>
            </div>

            {/* Messenger kedvezmény */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sunset-gold/20 relative">
              <div className="absolute top-4 right-4 bg-sunset-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                -10%
              </div>
              <div className="h-48 bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center">
                <span className="text-7xl">💬</span>
              </div>
              <div className="p-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-2">
                  Messenger Foglalás
                </h2>
                <p className="text-sunset-orange font-semibold mb-4">
                  Bármely szobára | -10% kedvezmény
                </p>
                <p className="text-sunset-dark/70 leading-relaxed mb-6">
                  Egyszerűen írjon nekünk a Facebook Messengeren, és
                  automatikusan 10% kedvezményt kap bármely szobánk foglalására
                  a Booking.com-on feltüntetett árhoz képest!
                </p>

                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold text-sunset-dark">
                    Miért érdemes Messengeren foglalni?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "10% azonnali kedvezmény",
                      "Gyors, személyes válasz",
                      "Rugalmas egyeztetés",
                      "Különleges kérések könnyű intézése",
                      "Közvetlen kapcsolat a házigazdával",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-sunset-dark/70"
                      >
                        <span className="text-sunset-orange">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg text-lg"
                >
                  💬 Írjon nekünk Messengeren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hogyan működik? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Hogyan Működik a Foglalás?
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 sunset-gradient rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-sunset-burgundy mb-2">
                Booking.com
              </h3>
              <p className="text-sunset-dark/60 text-sm">
                Foglaljon közvetlenül a Booking.com-on az aktuális áron.
                Biztonságos, megbízható.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">VAGY</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 sunset-gradient rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-sunset-burgundy mb-2">
                Messenger
              </h3>
              <p className="text-sunset-dark/60 text-sm">
                Írjon Messengeren és kapjon 10% kedvezményt. Személyes
                egyeztetés, gyors válasz!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Ne hagyja ki a kedvezményt!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglaljon most és élvezze a Velencei-tó legszebb naplementéit
            kedvezményesen!
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
