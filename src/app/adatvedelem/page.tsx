import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatvédelmi Tájékoztató | Sunset Apartment Gárdony",
  description:
    "Adatvédelmi tájékoztató – hogyan kezeljük a vendégek adatait a Sunset Apartment Gárdony weboldalán.",
};

export default function Adatvedelem() {
  return (
    <>
      <section className="relative pt-28 pb-12 bg-gradient-to-b from-sunset-dark to-sunset-burgundy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Adatvédelmi Tájékoztató
          </h1>
          <p className="text-sunset-cream/70 text-lg">
            Hatályos: 2025. január 1-től
          </p>
        </div>
      </section>

      <section className="py-16 bg-sunset-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-sunset-gold/10 prose prose-sunset max-w-none">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              1. Az adatkezelő adatai
            </h2>
            <p className="text-sunset-dark/80 mb-6">
              Név: Sunset Apartment Gárdony<br />
              Cím: 2483 Gárdony, Körösi Csoma Sándor tér 3.<br />
              E-mail: info@sunsetgardony.hu<br />
              Telefon: +36 30 123 4567
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              2. Milyen adatokat gyűjtünk?
            </h2>
            <p className="text-sunset-dark/80 mb-2">
              A weboldalon keresztül az alábbi személyes adatokat gyűjthetjük:
            </p>
            <ul className="list-disc pl-6 text-sunset-dark/70 mb-6 space-y-1">
              <li>Név – a kapcsolatfelvételi űrlapon megadott név</li>
              <li>E-mail cím – a válaszadáshoz szükséges elérhetőség</li>
              <li>Telefonszám – opcionálisan megadott elérhetőség</li>
              <li>Üzenet tartalma – a kapcsolatfelvételi űrlapon küldött szöveg</li>
            </ul>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              3. Az adatgyűjtés célja
            </h2>
            <ul className="list-disc pl-6 text-sunset-dark/70 mb-6 space-y-1">
              <li>Kapcsolatfelvétel és kommunikáció a vendégekkel</li>
              <li>Foglalási kérések kezelése</li>
              <li>Vendégszolgáltatás és kérdések megválaszolása</li>
              <li>A weboldal működésének biztosítása</li>
            </ul>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              4. Az adatkezelés jogalapja
            </h2>
            <p className="text-sunset-dark/80 mb-6">
              Az adatkezelés az Ön hozzájárulásán alapul (GDPR 6. cikk (1)
              bekezdés a) pont). Az űrlap kitöltésével és elküldésével Ön
              hozzájárul személyes adatainak kezeléséhez a fent megjelölt
              célok érdekében.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              5. Adatok megőrzési ideje
            </h2>
            <p className="text-sunset-dark/80 mb-6">
              A személyes adatokat a kapcsolatfelvétel céljának megvalósulásáig,
              de legfeljebb 2 évig őrizzük meg. Foglalással kapcsolatos adatokat
              a jogszabályi kötelezettségnek megfelelően 8 évig tároljuk.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              6. Adattovábbítás harmadik félnek
            </h2>
            <p className="text-sunset-dark/80 mb-6">
              Személyes adatait nem adjuk tovább harmadik félnek, kivéve ha azt
              jogszabály kötelezően előírja. A Booking.com-on keresztüli
              foglalások esetén a Booking.com saját adatvédelmi szabályzata az
              irányadó.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              7. Az Ön jogai
            </h2>
            <p className="text-sunset-dark/80 mb-2">
              Az adatkezeléssel kapcsolatban Önt az alábbi jogok illetik meg:
            </p>
            <ul className="list-disc pl-6 text-sunset-dark/70 mb-6 space-y-1">
              <li>Tájékoztatáshoz való jog – kérheti, milyen adatait kezeljük</li>
              <li>Hozzáférés joga – másolatot kérhet az adatairól</li>
              <li>Helyesbítéshez való jog – kérheti adatai módosítását</li>
              <li>Törléshez való jog – kérheti adatai törlését</li>
              <li>Hozzájárulás visszavonása – bármikor visszavonhatja hozzájárulását</li>
            </ul>
            <p className="text-sunset-dark/80 mb-6">
              Jogainak gyakorlásához kérjük, írjon nekünk az{" "}
              <a
                href="mailto:info@sunsetgardony.hu"
                className="text-sunset-orange hover:text-sunset-red"
              >
                info@sunsetgardony.hu
              </a>{" "}
              e-mail címre.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              8. Sütik (cookie-k)
            </h2>
            <p className="text-sunset-dark/80 mb-6">
              Weboldalunk kizárólag a működéshez feltétlenül szükséges sütiket
              használ. Harmadik féltől származó sütik (pl. Google Maps
              beágyazás) esetén az adott szolgáltató adatvédelmi irányelvei az
              irányadók.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-sunset-burgundy mb-4">
              9. Jogorvoslat
            </h2>
            <p className="text-sunset-dark/80">
              Amennyiben úgy érzi, hogy személyes adatainak kezelése sérti a
              jogszabályokat, panasszal fordulhat a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz (NAIH):<br />
              Cím: 1055 Budapest, Falk Miksa utca 9-11.<br />
              Web:{" "}
              <a
                href="https://naih.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-sunset-red"
              >
                naih.hu
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
