import Link from "next/link";
import Image from "@/components/AppImage";

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
              href="https://www.booking.com/hotel/hu/sunset-apartment-gardony-for-6-people-with-free-ac-free-parking.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-xl hover:shadow-sunset-orange/50 text-lg"
            >
              Foglalás a Booking.com-on
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
                más sporttevékenység vár rád.
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
              "/assets/images/839688042.jpg",
              "/assets/images/839687937.jpg",
              "/assets/images/839688297.jpg",
              "/assets/images/839687636.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer relative"
              >
                <Image
                  src={src}
                  alt={`Apartman – ${i + 1}. kép`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
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
      <section className="py-20 bg-sunset-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-gold text-center mb-4">
            A Környék
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-sunset-cream/80 text-center mb-12 max-w-2xl mx-auto">
            A környék számtalan programlehetőséget kínál
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-sunset-dark/50 rounded-2xl border border-sunset-gold/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-burgundy/30 rounded-full flex items-center justify-center text-3xl">
                🦉
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-gold mb-2">
                Nyugodt pihenés
              </h3>
              <p className="text-sunset-cream/70">
                Vadaspark és arborétum
              </p>
            </div>
            <div className="text-center p-6 bg-sunset-dark/50 rounded-2xl border border-sunset-gold/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-burgundy/30 rounded-full flex items-center justify-center text-3xl">
                🐟
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-gold mb-2">
                Horgászás
              </h3>
              <p className="text-sunset-cream/70">
                Vízi-világ megfigyelőpont
              </p>
            </div>
            <div className="text-center p-6 bg-sunset-dark/50 rounded-2xl border border-sunset-gold/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-burgundy/30 rounded-full flex items-center justify-center text-3xl">
                🔭
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-gold mb-2">
                Kilátó
              </h3>
              <p className="text-sunset-cream/70">
                Bence-hegyi kilátó
              </p>
            </div>
            <div className="text-center p-6 bg-sunset-dark/50 rounded-2xl border border-sunset-gold/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-burgundy/30 rounded-full flex items-center justify-center text-3xl">
                🛥️
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-gold mb-2">
                Programok
              </h3>
              <p className="text-sunset-cream/70">
                Hajókázás
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendégkönyv */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy mb-4">
            Vendégkönyv
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-8" />
          <p className="text-sunset-dark/70 mb-10 max-w-2xl mx-auto">
            Vendégeink élményei és véleményei a szálláshelyről.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Anna és Péter",
                text: "Csodálatos naplemente, tökéletes apartman! Biztosan visszatérünk.",
                date: "2025. augusztus",
              },
              {
                name: "Szabó család",
                text: "A gyerekek imádták a tó közelségét, a konyha tökéletesen felszerelt volt.",
                date: "2025. július",
              },
              {
                name: "Márk és barátai",
                text: "Baráti társaságnak kiváló hely. Reméljük jövőre is jöhetünk!",
                date: "2025. szeptember",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-sunset-gold/10 text-left"
              >
                <p className="text-sunset-dark/70 italic mb-4">
                  &bdquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sunset-burgundy text-sm">
                    {review.name}
                  </span>
                  <span className="text-sunset-dark/40 text-xs">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
