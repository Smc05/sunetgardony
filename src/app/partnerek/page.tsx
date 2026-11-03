import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/AppImage";
import {
  BadgeCheck,
  BatteryCharging,
  Globe,
  Leaf,
  MapPin,
  Phone,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerek | Sunset Apartment Gárdony",
  description:
    "Ismerd meg partnereinket a Velencei-tó környékén. GuruljON: elektromos tricikli bérlés Gárdonyban.",
};

type PartnerFeature = {
  icon: LucideIcon;
  label: string;
};

type Partner = {
  id: string;
  name: string;
  location: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  features: PartnerFeature[];
  website: string;
  phone: string;
  phoneHref: string;
};

const partners: Partner[] = [
  {
    id: "guruljon",
    name: "GuruljON",
    location: "Gárdony, Velencei-tó",
    title: "Elektromos tricikli bérlés",
    subtitle: "GuruljON élményekkel a Velencei-tó körül!",
    paragraphs: [
      "A Velencei-tó környéke számos izgalmas programot és látnivalót tartogat, de miért ne fedeznéd fel a tájat kényelmesen, mégis környezetbarát módon? Elektromos tricikli bérlés szolgáltatásunk tökéletes választás pároknak, barátoknak vagy akár családoknak is, akik szeretnének fáradtság nélkül, mégis a szabad levegőn élvezni a kikapcsolódást.",
      "A modern, biztonságos és könnyen kezelhető elektromos triciklikkel gyerekjáték a közlekedés a part menti kerékpárutakon és sétányokon. Kényelmes tempóban, útközben megállva a hangulatos büféknél, fagyizóknál vagy a csodás kilátópontoknál a kirándulás igazi élmény és feltöltődés. Válaszd a kényelmes és élménydús közlekedést a Velencei-tónál, kapcsold ki a zajt, és kapcsold be a szabadságot!",
    ],
    image: "/assets/images/partnerek/GuruljON_web.jpg",
    imageAlt: "GuruljON elektromos tricikli bérlés Gárdonyban, a Velencei-tónál",
    features: [
      { icon: Users, label: "2 fős zárt kabin" },
      { icon: BatteryCharging, label: "40 km hatótáv egy töltéssel" },
      { icon: BadgeCheck, label: "Nem kell vezetői engedély (18 év felett)" },
      { icon: Leaf, label: "100% elektromos, környezetbarát" },
    ],
    website: "https://www.tricikliberles.hu",
    phone: "+36 30 510 71 97",
    phoneHref: "tel:+36305107197",
  },
];

export default function Partnerek() {
  return (
    <>
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#C88E33] via-[#EBB358] to-[#F9D189]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D1E10] mb-4">
            Partnerek
          </h1>
          <p className="text-[#2D1E10]/80 text-lg max-w-2xl mx-auto">
            Helyi szolgáltatók a Velencei-tó környékén, akikkel a pihenésed még színesebb lehet.
          </p>
        </div>
      </section>

      {partners.map((partner, index) => {
        const imageFirst = index % 2 === 0;
        const sectionBg = index % 2 === 0 ? "bg-sunset-cream" : "bg-white";

        return (
          <section key={partner.id} className={`py-20 ${sectionBg}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {index === 0 && (
                <div className="text-center mb-12">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-sunset-burgundy mb-4">
                    Partnereink
                  </h2>
                  <div className="w-20 h-1 sunset-gradient mx-auto rounded-full mb-4" />
                  <p className="text-sunset-dark/70 max-w-2xl mx-auto">
                    Ha nálunk szállsz meg, ezek a közeli szolgáltatások teszik kerekebbé a napokat.
                  </p>
                </div>
              )}

              <article className="bg-white rounded-2xl border border-sunset-gold/10 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
                  <div
                    className={`relative aspect-square bg-sunset-light ${
                      imageFirst ? "" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={partner.image}
                      alt={partner.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className={`p-6 sm:p-10 ${imageFirst ? "" : "lg:order-1"}`}>
                    <p className="text-sunset-orange font-semibold tracking-wide mb-2">
                      {partner.name}
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-sunset-burgundy mb-2">
                      {partner.title}
                    </h3>
                    <p className="text-sunset-dark/80 text-lg italic mb-3">
                      {partner.subtitle}
                    </p>
                    <p className="flex items-center gap-2 text-sunset-dark/60 text-sm mb-6">
                      <MapPin className="w-4 h-4 shrink-0 text-sunset-orange" />
                      {partner.location}
                    </p>

                    {partner.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sunset-dark/80 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                      {partner.features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                          <li
                            key={feature.label}
                            className="flex items-center gap-3 bg-sunset-cream rounded-xl px-4 py-3"
                          >
                            <span className="w-9 h-9 shrink-0 bg-white rounded-full flex items-center justify-center">
                              <Icon className="w-4 h-4 text-sunset-orange" />
                            </span>
                            <span className="text-sunset-dark/80 text-sm font-medium leading-snug">
                              {feature.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg"
                      >
                        <Globe className="w-4 h-4" />
                        Weboldal
                      </a>
                      <a
                        href={partner.phoneHref}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white font-bold rounded-full transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        {partner.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        );
      })}

      <section
        className={`py-10 ${partners.length % 2 === 0 ? "bg-sunset-cream" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/kapcsolat"
            className="text-sunset-dark/60 hover:text-sunset-orange transition-colors text-sm"
          >
            Szeretnél partnerünk lenni? Írj nekünk!
          </Link>
        </div>
      </section>

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
