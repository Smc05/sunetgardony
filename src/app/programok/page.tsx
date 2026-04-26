import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/AppImage";

export const metadata: Metadata = {
  title: "Programok és Események | Sunset Apartment Gárdony",
  description:
    "Fedezd fel a Velencei-tó környékének legjobb programjait és eseményeit – fürdőzés, túrázás, kerékpározás, gasztronómia és még sok más.",
};

export default function Programok() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Programok és Események
          </h1>
          <p className="text-sunset-cream/70 text-lg max-w-2xl mx-auto">
            A Velencei-tó környéke egész évben számtalan élményt kínál – legyen szó aktív kikapcsolódásról, kulturális programokról vagy egyszerű feltöltődésről.
          </p>
        </div>
      </section>

      {/* Környék és programok */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            A Környék
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-sunset-dark/70 text-center max-w-3xl mx-auto mb-12">
            A környék számtalan lehetőséget kínál a kikapcsolódásra és feltöltődésre.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[
              { icon: "🏊", label: "Fürdés a Velencei-tóban" },
              { icon: "🧘", label: "Nyugodt pihenés" },
              { icon: "🧳", label: "Kirándulás" },
              { icon: "⛰️", label: "Túrázás" },
              { icon: "🚴", label: "Kerékpározás a tó körül" },
              { icon: "🌿", label: "Tiszta vidéki levegő" },
              { icon: "♨️", label: "Agárdi Gyógy- és Termálfürdő" },
              { icon: "🎣", label: "Horgászás" },
              { icon: "🍽️", label: "Gasztronómia" },
              { icon: "🎭", label: "Kulturális programok" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <span className="text-sunset-dark/70 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl border border-sunset-gold/10 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                🦉
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Természet Közelsége
              </h3>
              <p className="text-sunset-dark/70">
                Vadaspark és arborétum, ahol a természet közelében töltheted a napot.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-sunset-gold/10 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                🐟
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Horgászás
              </h3>
              <p className="text-sunset-dark/70">
                Vízi-világ megfigyelőpont és horgászati lehetőségek a tó partján.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-sunset-gold/10 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                🔭
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Kilátó
              </h3>
              <p className="text-sunset-dark/70">
                Bence-hegyi kilátó – lélegzetelállító panoráma a Velencei-tóra.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-sunset-gold/10 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center text-3xl">
                🛥️
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-burgundy mb-2">
                Hajókázás
              </h3>
              <p className="text-sunset-dark/70">
                Hajókirándulás a Velencei-tavon, felejthetetlen élmény az egész családnak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fotók a környékről */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Képek a Környékről
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: "/assets/images/programok/1777210804762.jpg", label: "Agárdi Gyógy- és Termálfürdő" },
              { src: "/assets/images/programok/1777210804783.jpg", label: "Napsugár strand" },
              { src: "/assets/images/programok/1777210804803.jpg", label: "Nyári lúdcsalád szoborcsoport" },
              { src: "/assets/images/programok/1777210804824.jpg", label: "Vidra szobor" },
              { src: "/assets/images/programok/1777210804844.jpg", label: "Pálinkafőzde" },
              { src: "/assets/images/programok/1777212010961.jpg", label: null },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.src}
                    alt={item.label ?? `A Velencei-tó környéke – ${i + 1}. kép`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                {item.label && (
                  <p className="text-center text-sunset-dark/70 text-sm font-medium py-2 px-1">
                    {item.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Évszakok szerint */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Programok Évszakonként
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sunset-cream rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-sunset-burgundy mb-4">
                ☀️ Tavasz / Nyár
              </h3>
              <ul className="space-y-3 text-sunset-dark/70">
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Fürdőzés és napozás a Velencei-tó strandjain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Kerékpártúra a tó körüli kerékpárúton
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Vitorlázás és SUP a tavon
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Szabadtéri koncertek és fesztiválok
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Hajókirándulás a Velencei-tavon
                </li>
              </ul>
            </div>
            <div className="bg-sunset-cream rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-sunset-burgundy mb-4">
                🍂 Ősz / Tél
              </h3>
              <ul className="space-y-3 text-sunset-dark/70">
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Agárdi Gyógy- és Termálfürdő élmény
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Őszi túrázás a Bence-hegyen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Borkóstolók és gasztronómiai programok
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Madármegfigyelés a Velencei-tó Természetvédelmi Területen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  Adventi és karácsonyi vásárok a környéken
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Látnivalók részletesen */}
      <section className="py-20 bg-sunset-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-gold text-center mb-4">
            Kiemelt Látnivalók
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "♨️",
                title: "Agárdi Gyógy- és Termálfürdő",
                desc: "Sétatávolságra a szálláshelytől. Gyógymedencék, élményfürdő, szaunák és wellness szolgáltatások egész évben.",
              },
              {
                icon: "🌊",
                title: "Velencei-tó Strandok",
                desc: "A tó partján számos strand vár – családoknak és sportolóknak egyaránt ideális helyszín a nyári kikapcsolódásra.",
              },
              {
                icon: "🔭",
                title: "Bence-hegyi Kilátó",
                desc: "Panorámás kilátás a Velencei-tóra és a környező hegyekre. Rövid, könnyű túrával elérhető.",
              },
              {
                icon: "🦉",
                title: "Vadaspark és Arborétum",
                desc: "Természetközeli élmény az egész családnak – állatpark, séta- és pihenőhelyek a zöldben.",
              },
              {
                icon: "🚴",
                title: "Kerékpárút a Tó Körül",
                desc: "A tó körüli kerékpárút kiváló lehetőség az aktív pihenésre, gyönyörű természeti környezetben.",
              },
              {
                icon: "🍷",
                title: "Gasztronómia és Borok",
                desc: "Helyi éttermek, borkóstolók és piacok – fedezd fel a Velencei-tó környékének ízvilágát.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-sunset-dark/50 rounded-2xl border border-sunset-gold/10"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-sunset-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-sunset-cream/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hasznos linkek */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Hasznos Linkek
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-sunset-dark/70 text-center max-w-2xl mx-auto mb-12">
            Böngészd át az alábbi oldalakat a legfrissebb programokért, látnivalókért és élményekért a Velencei-tó környékén.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "https://velenceitohajozas.hu/",
                title: "Velencei-tó Hajózás",
                desc: "Hajókirándulások és menetrendek a Velencei-tavon.",
              },
              {
                href: "https://www.velenceturizmus.hu/Programok",
                title: "Velence Turizmus – Programok",
                desc: "Aktuális programok és események Velencén.",
              },
              {
                href: "https://velenceito.info/category/programok/",
                title: "Velencei-tó Info – Programok",
                desc: "Programajánló a Velencei-tó térségéből.",
              },
              {
                href: "https://ilovevelenceito.hu/",
                title: "I Love Velencei-tó",
                desc: "Minden, amit a Velencei-tóról tudni érdemes.",
              },
              {
                href: "https://www.velencei-to.hu/",
                title: "Velencei-tó – Hivatalos portál",
                desc: "A Velencei-tó régió hivatalos weboldala: látnivalók, szállás, programok és hasznos információk egy helyen.",
              }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-sunset-gold/10 hover:shadow-lg hover:border-sunset-orange/30 transition-all group"
              >
                <div className="w-10 h-10 shrink-0 bg-sunset-light rounded-full flex items-center justify-center text-xl group-hover:bg-sunset-orange/20 transition-colors">
                  🔗
                </div>
                <div>
                  <h3 className="font-semibold text-sunset-burgundy group-hover:text-sunset-orange transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sunset-dark/60 text-sm">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Készen állsz a felfedezésre?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglalj most és fedezd fel a Velencei-tó környékének összes kincsét!
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
            <Link
              href="/kapcsolat"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all"
            >
              Kapcsolat →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
