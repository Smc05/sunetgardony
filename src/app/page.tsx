import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="Naplemente a Velencei-tó felett"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Image
            src="/assets/logo/logo-t-bg.png"
            alt="Sunset Apartment Gárdony"
            width={280}
            height={280}
            className="mx-auto mb-6"
            priority
          />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sunset Apartment Gárdony
          </h1>
          <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-sunset-cream/90 mb-10 italic max-w-3xl mx-auto">
            Csodáld meg a Velencei-tó legszebb naplementéit a romantikus tetőtéri apartmanunkból
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-xl hover:shadow-sunset-orange/50 text-lg"
            >
              Foglalás a Booking.com-on
            </a>
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-sunset-gold text-sunset-gold hover:bg-sunset-gold hover:text-sunset-dark font-bold rounded-full transition-all text-lg"
            >
              💬 Messenger – 10% kedvezmény
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-sunset-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* A Hely Varázsa */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            A Hely Varázsa
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                🌊
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Velencei-tó Közelsége
              </h3>
              <p className="text-sunset-dark/70">
                A tó közelsége és a természetközeli élmények garantálják a
                feltöltődést.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                ♨️
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Agárdi Termálfürdő
              </h3>
              <p className="text-sunset-dark/70">
                Az Agárdi Gyógy- és Termálfürdő sétatávolságra van a
                szálláshelytől.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                �
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Kikapcsolódási Lehetőségek
              </h3>
              <p className="text-sunset-dark/70">
                Biciklitúra a tó körül, vitorlázás, úszás a tóban, és még sok
                más sporttevékenység vár Önre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Képgaléria előnézet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Képek az Apartmanról
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Naplemente a tó felett",
              "Hálószoba",
              "Terasz",
              "Nappali",
            ].map((title, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gradient-to-br from-sunset-light to-sunset-gold/30 flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer overflow-hidden"
              >
                <div className="text-center p-4">
                  <span className="text-4xl block mb-2">
                    {["🌅", "🛏️", "🏡", "🛋️"][i]}
                  </span>
                  <span className="text-sunset-burgundy/70 text-sm font-medium">
                    {title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/apartmanunk"
              className="inline-block px-8 py-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg text-lg"
            >
              További képek →
            </Link>
          </div>
        </div>
      </section>

      {/* A Környék */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            A Környék
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-sunset-dark/70 text-center max-w-3xl mx-auto mb-12">
            A környék számtalan lehetőséget kínál a kikapcsolódásra és feltöltődésre.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "🏊", label: "Fürdés a Velencei-tóban" },
              { icon: "🧘", label: "Nyugodt pihenés" },
              { icon: "🧳", label: "Kirándulás" },
              { icon: "⛰️", label: "Túrázás" },
              { icon: "🚴", label: "Kerékpározás a tó körül" },
              { icon: "🌿", label: "Tiszta vidéki levegő" },
              { icon: "🏍️", label: "Motorozás" },
              { icon: "🎣", label: "Horgászás" },
              { icon: "🍽️", label: "Gasztronómia" },
              { icon: "🎭", label: "Programok" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-sunset-cream rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <span className="text-sunset-dark/70 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messenger CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Foglaljon Messengeren – Spóroljon 10%-ot!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Írjon nekünk közvetlenül Messengeren és automatikusan 10%
            kedvezményt kap a Booking.com-os árhoz képest. Gyors válasz,
            személyes kiszolgálás!
          </p>
          <a
            href="https://m.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-sunset-orange font-bold rounded-full text-lg hover:bg-sunset-cream transition-all shadow-xl"
          >
            💬 Írjon nekünk Messengeren
          </a>
        </div>
      </section>

      {/* Gyors linkek */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/apartmanunk"
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sunset-gold/10"
            >
              <span className="text-4xl block mb-4">🏠</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2 group-hover:text-sunset-orange transition-colors">
                Apartmanunk
              </h3>
              <p className="text-sunset-dark/60 text-sm">
                Ismerje meg szálláshelyünk történetét és egyedi hangulatát.
              </p>
            </Link>
            <Link
              href="/kapcsolat"
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sunset-gold/10"
            >
              <span className="text-4xl block mb-4">📞</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2 group-hover:text-sunset-orange transition-colors">
                Kapcsolat
              </h3>
              <p className="text-sunset-dark/60 text-sm">
                Vegye fel velünk a kapcsolatot, szívesen segítünk!
              </p>
            </Link>
            <Link
              href="/ajanlataink"
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sunset-gold/10"
            >
              <span className="text-4xl block mb-4">💝</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2 group-hover:text-sunset-orange transition-colors">
                Ajánlataink
              </h3>
              <p className="text-sunset-dark/60 text-sm">
                Fedezze fel akciós csomagjainkat és romantikus ajánlatainkat.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
