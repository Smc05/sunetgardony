import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Apartmanunk | Sunset Apartment Gárdony",
  description:
    "Ismerje meg a Sunset Apartment Gárdony-t – történetünket, helyszínünket és a Velencei-tó varázsát.",
};

export default function Apartmanunk() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Apartmanunk
          </h1>
          <p className="text-sunset-cream/70 text-lg max-w-2xl mx-auto">
            Egy hely, ahol a természet szépsége és az otthon melege találkozik.
          </p>
        </div>
      </section>

      {/* Bemutatkozás */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder kép */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sunset-light to-sunset-gold/40 flex items-center justify-center">
              <span className="text-8xl">🏡</span>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy mb-6">
                Üdvözöljük a Sunset Apartment Gárdony-ban
              </h2>
              <p className="text-sunset-dark/80 leading-relaxed mb-4">
                A lakás egy családi ház tetőterében található, külön
                bejárattal, saját parkolóval. Az apartman 4-6 fő részére
                kínál kényelmes elhelyezést.
              </p>
              <p className="text-sunset-dark/80 leading-relaxed mb-4">
                A szálláshely a Velencei-tó közelében, Agárdon található,
                csendes, nyugodt környezetben. A környék számtalan
                lehetőséget kínál: fürdés a Velencei-tóban, nyugodt pihenés,
                kirándulás, túrázás, kerékpározás a tó körül.
              </p>
              <p className="text-sunset-dark/80 leading-relaxed mb-4">
                Az Agárdi Gyógy- és Termálfürdő sétatávolságra van a
                szálláshelytől. Az apartman kiválóan felszerelt konyhával,
                hűtő-fűtő klímával, ingyenes WiFi-vel és ingyenes
                parkolóval rendelkezik.
              </p>
              <p className="text-sunset-dark/80 leading-relaxed">
                Vendégeinket szeretettel várjuk egész évben – 4 évszakos
                szálláshely vagyunk!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Miért különleges */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Miért Különleges?
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌅",
                title: "Naplementés Panoráma",
                desc: "Közvetlen kilátás a tó feletti naplementére minden szobából.",
              },
              {
                icon: "🌿",
                title: "Természetközelség",
                desc: "Csendes, zöld környezet, távol a városi zajtól.",
              },
              {
                icon: "🛏️",
                title: "Modern Kényelem",
                desc: "Gondosan berendezett szobák minden kényelemmel.",
              },
              {
                icon: "❤️",
                title: "Személyes Kiszolgálás",
                desc: "Vendégszerető házigazdák, akik mindent megtesznek Önért.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-sunset-cream rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-sunset-burgundy mb-2">
                  {item.title}
                </h3>
                <p className="text-sunset-dark/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videó szekció */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy text-center mb-4">
            Fedezze Fel a Helyszínt
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          {/* Placeholder videó */}
          <div className="aspect-video bg-sunset-dark/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl block mb-4">🎬</span>
              <p className="text-sunset-dark/50">
                Videó a helyszínről és a naplementéről
              </p>
              <p className="text-sunset-dark/30 text-sm mt-2">
                (YouTube videó beágyazás helye)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Térkép */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy text-center mb-4">
            Megközelíthetőség
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-4">
                Hogyan Juthat El Hozzánk?
              </h3>

              <div className="bg-sunset-cream rounded-2xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-sunset-dark">Pontos cím</p>
                    <p className="text-sunset-orange font-medium">
                      2483 Gárdony, Körösi Csoma Sándor tér 3.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-semibold text-sunset-dark">Autóval</p>
                    <p className="text-sunset-dark/60 text-sm">
                      Budapest központjából kb. 50 perc az M7-es autópályán.
                      Székesfehérvári lehajtó, majd a 7-es főúton Agárd felé.
                      Ingyenes parkolás a helyszínen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚂</span>
                  <div>
                    <p className="font-semibold text-sunset-dark">Vonattal</p>
                    <p className="text-sunset-dark/60 text-sm">
                      Budapest-Déli pályaudvarról közvetlen járat Agárd
                      megállóig. Az állomástól kb. 10 perc séta.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚌</span>
                  <div>
                    <p className="font-semibold text-sunset-dark">Busszal</p>
                    <p className="text-sunset-dark/60 text-sm">
                      Volánbusz járatok Székesfehérvárról és Budapestről. Agárd
                      központi megálló 5 perc sétára.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="aspect-[4/3] bg-sunset-dark/5 rounded-2xl overflow-hidden">
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
        </div>
      </section>

      {/* Felszereltség */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Felszereltség
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "❄️", title: "Hűtő-fűtő klíma", desc: "Hűtés és fűtés egész évben" },
              { icon: "🔥", title: "Radiátor", desc: "Központi fűtés" },
              { icon: "🍃", title: "4 évszakos szálláshely", desc: "Egész évben nyitva" },
              { icon: "🧼", title: "Alapvető kellékek", desc: "Szappan, wc-papír, mosogatószer, szivacs, törlőkendő" },
              { icon: "📶", title: "Ingyenes WiFi", desc: "Gyors, megbízható internet" },
              { icon: "🛏️", title: "Ágynemű & törölköző", desc: "Személyenként 1-1 törölköző, kéztörlő és ágynemű nagypárnával" },
              { icon: "🍳", title: "Felszerelt konyha", desc: "Hűtő, indukciós főzőlap, sütő, mikró, vízforraló, kávéfőző, pirítós, melegszendvics sütő" },
              { icon: "🎫", title: "Ingyenes parkolás", desc: "Ingyenes parkolási lehetőség a szálláshelyen" },
              { icon: "👥", title: "4 személyes", desc: "4 személy részére kényelmes, a kanapé a nappaliban kinyitható + 2 fő részére" },
              { icon: "🛋️", title: "140-es kanapé", desc: "Kinyitható kanapéágy" },
              { icon: "📺", title: "Full HD okos TV", desc: "Smart TV streaming lehetőséggel" },
              { icon: "🚲", title: "Kerékpár tároló", desc: "Biztonságos kerékpár tárolási lehetőség" },
              { icon: "🪟", title: "Ablakok", desc: "Szúnyoghálóval, sötétítő rolóval ellátott ablakok" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-shadow border border-sunset-gold/10"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-sunset-burgundy text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-sunset-dark/50 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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

      {/* Galéria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Galéria
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-center text-sunset-dark/60 mb-12 max-w-xl mx-auto">
            Kattintson bármelyik képre a nagyobb nézethez – és böngésszen végig az összes fotón.
          </p>
          <Gallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Készen áll a feltöltődésre?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglaljon most és fedezze fel a Velencei-tó legszebb naplementéit!
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
