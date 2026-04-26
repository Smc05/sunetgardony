import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áraink | Sunset Apartment Gárdony",
  description:
    "Nézd meg a Sunset Apartment Gárdony aktuális árait a Booking.com-on.",
};

export default function Araink() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#C88E33] via-[#EBB358] to-[#F9D189]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D1E10] mb-4">
            Áraink
          </h1>
          <p className="text-[#2D1E10]/80 text-lg max-w-2xl mx-auto">
            Átlátható árazás, rugalmas foglalási lehetőségek.
          </p>
        </div>
      </section>

      {/* Tartalom */}
      <section className="py-20 bg-sunset-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-sunset-gold/10">
            <span className="text-5xl block mb-6">💰</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-sunset-burgundy mb-6">
              Áraink nem egységesek
            </h2>
            <p className="text-sunset-dark/70 text-lg leading-relaxed mb-8">
              Az árak az adott időszaktól, a tartózkodás hosszától és a vendégek
              számától függően változnak. A Booking.com oldalra kattintva
              találod meg az adott napokra vonatkozó aktuális árakat.
            </p>
            <a
              href="https://www.booking.com/hotel/hu/sunset-apartment-gardony-for-6-people-with-free-ac-free-parking.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg hover:shadow-sunset-orange/40 text-lg"
            >
              Foglalás a Booking.com-on
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
