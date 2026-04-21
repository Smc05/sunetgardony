import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szobák | Sunset Apartment Gárdony",
  description:
    "Tekintse meg szobáinkat a Sunset Gardony apartmanban – részletes leírás, képek, árak és foglalási lehetőségek.",
};

const rooms = [
  {
    id: "naplemente-szoba",
    name: "Naplemente Szoba",
    emoji: "🌅",
    capacity: "2 fő",
    size: "28 m²",
    description:
      "Romantikus kétszemélyes szoba közvetlen kilátással a tóra és a naplementére. King-size ágy, modern fürdőszoba, légkondicionálás és privát erkély.",
    features: [
      "King-size ágy",
      "Tóra néző erkély",
      "Légkondicionálás",
      "Mini hűtőszekrény",
      "Szobaszéf",
      "Ingyenes WiFi",
      "Hajszárító",
      "Síkképernyős TV",
    ],
    price: "25 000 Ft / éjszaka",
  },
  {
    id: "harmonia-szoba",
    name: "Harmónia Szoba",
    emoji: "🛏️",
    capacity: "2-3 fő",
    size: "35 m²",
    description:
      "Tágas szoba franciaággyal és egy pótággyal. Ideális pároknak vagy kisgyermekes családoknak. Meleg színvilág, kényelmes berendezés.",
    features: [
      "Franciaágy + pótágy",
      "Kerti kilátás",
      "Légkondicionálás",
      "Kis teakonyha",
      "Szobaszéf",
      "Ingyenes WiFi",
      "Hajszárító",
      "Síkképernyős TV",
    ],
    price: "30 000 Ft / éjszaka",
  },
  {
    id: "familia-szoba",
    name: "Família Szoba",
    emoji: "👨‍👩‍👧‍👦",
    capacity: "4 fő",
    size: "45 m²",
    description:
      "Két hálós családi szoba, amely ideális a nagyobb családok számára. Két különálló hálószoba, nappali, teljes felszereltségű kis konyha.",
    features: [
      "2 különálló hálószoba",
      "Nappali",
      "Kis konyha",
      "Légkondicionálás",
      "2 fürdőszoba",
      "Ingyenes WiFi",
      "Mosógép",
      "Síkképernyős TV",
    ],
    price: "45 000 Ft / éjszaka",
  },
];

export default function Szobak() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Szobáink
          </h1>
          <p className="text-sunset-cream/70 text-lg max-w-2xl mx-auto">
            Minden szobánk egyedi hangulatú, gondosan berendezett és a maximális
            kényelmet szolgálja.
          </p>
        </div>
      </section>

      {/* Szobák lista */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Kép placeholder */}
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br from-sunset-light to-sunset-gold/30 flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="text-center">
                  <span className="text-7xl block mb-4">{room.emoji}</span>
                  <p className="text-sunset-burgundy/50 text-sm">
                    Képgaléria helye
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-sunset-burgundy mb-2">
                  {room.name}
                </h2>
                <div className="flex gap-4 mb-4 text-sm text-sunset-dark/60">
                  <span>👥 {room.capacity}</span>
                  <span>📐 {room.size}</span>
                </div>
                <p className="text-sunset-dark/80 leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Felszereltség */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-sunset-dark/70"
                    >
                      <span className="text-sunset-orange">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Ár és foglalás */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-orange">
                    {room.price}
                  </span>
                  <a
                    href="https://www.booking.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg text-sm"
                  >
                    Szoba foglalása →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Messenger CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Kérdése van a szobákról?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Írjon nekünk Messengeren! Gyorsan válaszolunk, és 10% kedvezményt is
            kap a foglalásra.
          </p>
          <a
            href="https://m.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-sunset-orange font-bold rounded-full text-lg hover:bg-sunset-cream transition-all shadow-xl"
          >
            💬 Írjon Messengeren
          </a>
        </div>
      </section>
    </>
  );
}
