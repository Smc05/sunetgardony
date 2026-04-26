import type { Metadata } from "next";
import Image from "@/components/AppImage";
import Gallery from "@/components/Gallery";
import {
  Sunset,
  Leaf,
  BedDouble,
  Heart,
  Play,
  MapPin,
  Car,
  TrainFront,
  Bus,
  AirVent,
  Flame,
  CalendarCheck,
  SprayCan,
  Wifi,
  Shirt,
  UtensilsCrossed,
  ParkingCircle,
  Users,
  Sofa,
  Tv,
  Bike,
  AppWindow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apartmanunk | Sunset Apartment Gárdony",
  description:
    "Ismerd meg a Sunset Apartment Gárdony-t – történetünket, helyszínünket és a Velencei-tó varázsát.",
};

export default function Apartmanunk() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#C88E33] via-[#EBB358] to-[#F9D189]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D1E10] mb-4">
            Apartmanunk
          </h1>
          <p className="text-[#2D1E10]/80 text-lg max-w-2xl mx-auto">
            Egy hely, ahol a természet szépsége és az otthon melege találkozik.
          </p>
        </div>
      </section>

      {/* Bemutatkozás */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Képek az Apartmanról */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "/assets/images/gallery/839688042.jpg",
                "/assets/images/gallery/839687937.jpg",
                "/assets/images/gallery/839688297.jpg",
                "/assets/images/gallery/839687636.jpg",
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Apartman – ${i + 1}. kép`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy mb-6">
                Üdvözlünk a Sunset Apartment-ben
              </h2>
              <p className="text-sunset-dark/80 leading-relaxed mb-4">
                Szeretettel várunk Gárdonyban található, világos és hangulatos tetőtéri lakásunkban, amely ideális választás családoknak, baráti társaságoknak, de akár hosszabb tartózkodásra érkezők számára is. A lakás két külön hálószobával, egy fürdőszobával, nappalival és jól felszerelt konyhával rendelkezik, így akár négy-hat fő elhelyezését is biztosítja.
              </p>
              <p className="text-sunset-dark/80 leading-relaxed mb-4">
                A tetőtéri elhelyezkedésnek köszönhetően a lakást körberagyogja a nap a napfelkeltétől napnyugtáig, ami igazán kellemes, otthonos hangulatot teremt. A nyári melegben a komfortodról ingyenesen biztosított légkondicionálás gondoskodik 25°C felett, és a napvédő roló is lehúzható az ablakon. A hidegebb hónapokban a központi fűtés garantálja a meleget, illetve a klímával fűteni is lehet. A ház előtt parkolási lehetőség is adott, előzetes egyeztetés alapján akár két autó számára is tudunk helyet biztosítani.
              </p>
              <p className="text-sunset-dark/80 leading-relaxed">
                A konyhában minden megtalálható, ami egy gyors étkezéshez szükséges: sütő, mikrohullámú sütő, indukciós főzőlap, hűtő, vízforraló, kávéfőző, pirítós sütő és szendvicssütő áll a vendégek rendelkezésére. Ugyanakkor a városban számos kedvező árú, kiváló étterem is elérhető, így akár a főzéssel sem kell foglalkoznod. Okos TV és wifi használati lehetőség is van a lakásban. Az apartmanba lifttel és lépcsőn is fel lehet jutni. Gyermekeket 9 éves kor felett tudunk fogadni, mert a lakásban is, ahogy a képen is látszik, szintén van egy kis belső lépcsőház.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Képek az Apartmanról – Galéria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy text-center mb-4">
            Képek az Apartmanról
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
          <p className="text-center text-sunset-dark/60 mb-10 max-w-xl mx-auto">
            Kattints bármelyik képre a nagyobb nézethez és böngészd végig az összes fotót.
          </p>
          <Gallery />
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
                Icon: Sunset,
                title: "Naplementés Panoráma",
                desc: "Közvetlen kilátás a természetre, és a szobákból tó feletti naplementére.",
              },
              {
                Icon: Leaf,
                title: "Természetközelség",
                desc: "Csendes, zöld környezet, távol a városi zajtól.",
              },
              {
                Icon: BedDouble,
                title: "Modern Kényelem",
                desc: "Gondosan berendezett szobák minden kényelemmel.",
              },
              {
                Icon: Heart,
                title: "Személyes Kiszolgálás",
                desc: "Vendégszerető házigazdák, akik mindent megtesznek érted.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-6 bg-sunset-cream rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-sunset-light rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-sunset-orange" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-sunset-burgundy mb-2">
                  {title}
                </h3>
                <p className="text-sunset-dark/60 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videó szekció */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy text-center mb-4">
            Ezt is érdemes megnézni!
          </h2>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-12" />

          {/* Placeholder videó */}
          <div className="aspect-video bg-sunset-dark/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-sunset-light rounded-full flex items-center justify-center">
                <Play className="w-10 h-10 text-sunset-orange" />
              </div>
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
                Hogyan Juthatsz El Hozzánk?
              </h3>

              <div className="bg-sunset-cream rounded-2xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 bg-sunset-light rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sunset-orange" />
                  </div>
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
                  <div className="w-10 h-10 shrink-0 bg-sunset-light rounded-full flex items-center justify-center">
                    <Car className="w-5 h-5 text-sunset-orange" />
                  </div>
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
                  <div className="w-10 h-10 shrink-0 bg-sunset-light rounded-full flex items-center justify-center">
                    <TrainFront className="w-5 h-5 text-sunset-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-sunset-dark">Vonattal</p>
                    <p className="text-sunset-dark/60 text-sm">
                      Gárdony megállóig. Az állomástól busszal kb. 10 perc.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 bg-sunset-light rounded-full flex items-center justify-center">
                    <Bus className="w-5 h-5 text-sunset-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-sunset-dark">Busszal</p>
                    <p className="text-sunset-dark/60 text-sm">
                      Gárdony központi megállójában át kell szállni a helyi járatra.
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
              { Icon: AirVent, title: "Hűtő-fűtő klíma", desc: "Hűtés és fűtés egész évben" },
              { Icon: Flame, title: "Radiátor", desc: "Központi fűtés" },
              { Icon: CalendarCheck, title: "4 évszakos szálláshely", desc: "Egész évben nyitva" },
              { Icon: SprayCan, title: "Alapvető kellékek", desc: "Szappan, wc-papír, mosogatószer, szivacs, törlőkendő" },
              { Icon: Wifi, title: "Ingyenes WiFi", desc: "Gyors, megbízható internet" },
              { Icon: Shirt, title: "Ágynemű & törölköző", desc: "Személyenként 1-1 törölköző, kéztörlő és ágynemű nagypárnával" },
              { Icon: UtensilsCrossed, title: "Felszerelt konyha", desc: "Hűtő, indukciós főzőlap, sütő, mikró, vízforraló, kávéfőző, pirítós, melegszendvics sütő" },
              { Icon: ParkingCircle, title: "Ingyenes parkolás", desc: "Ingyenes parkolási lehetőség a szálláshelyen" },
              { Icon: Users, title: "4-6 személyes", desc: "4-6 személy részére kényelmes, a kanapé a nappaliban kinyitható + 2 fő részére" },
              { Icon: Sofa, title: "140-es kanapé", desc: "Kinyitható kanapéágy" },
              { Icon: Tv, title: "Full HD okos TV", desc: "Smart TV streaming lehetőséggel" },
              { Icon: Bike, title: "Kerékpár tároló", desc: "Biztonságos kerékpár tárolási lehetőség" },
              { Icon: AppWindow, title: "Ablakok", desc: "Szúnyoghálóval, sötétítő rolóval ellátott ablakok" },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-shadow border border-sunset-gold/10"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-sunset-light rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-sunset-orange" />
                </div>
                <h3 className="font-semibold text-sunset-burgundy text-sm mb-1">
                  {title}
                </h3>
                <p className="text-sunset-dark/50 text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sunset-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Készen állsz a feltöltődésre?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Foglalj most és fedezd fel a Velencei-tó legszebb naplementéit!
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
