export default function Hazirend() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-sunset-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-sunset-dark via-sunset-dark/95 to-sunset-burgundy/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-sunset-gold mb-4">
            Házirend
          </h1>
          <div className="w-20 h-1 sunset-gradient mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-sunset-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-sunset-gold/10">
            <p className="text-sunset-burgundy font-semibold text-lg mb-2">
              Kedves Vendégeink!
            </p>
            <p className="text-sunset-dark/70 mb-8 leading-relaxed">
              A kollégáim nevében megígérem, hogy mindent megteszünk annak
              érdekében, hogy az apartmanban töltött idejük nyugodt és kellemes
              legyen. A konfliktusmentes együttműködés érdekében kérjük olvassák
              el és tartsák be a házirendünket.
            </p>

            <ol className="space-y-6 text-sunset-dark/80 leading-relaxed">
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  1.) Be- és kijelentkezési információk
                </span>
                <br />
                Bejelentkezni 15.00-tól lehetséges, személyes beengedéssel.
                Amennyiben korábban szeretne érkezni, kérem jelezze számunkra és
                utánanézünk, van-e lehetőség a korai bejelentkezésre.
                Kijelentkezés 10.00-ig lehetséges. Amennyiben szeretne később
                távozni, maximum 12.00-ig tudjuk biztosítani (10 euró) díj
                ellenében, előzetes egyeztetés után. Kijelentkezés módja: hagyja
                a kulcsot a kulcsszéfben és forgassa el a számokat.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  2.) Kulcs elvesztése
                </span>
                <br />
                Kulcs elvesztése esetén 20 euró kártérítési díj fizetendő.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  3.) Vendégek látogatói
                </span>
                <br />
                Vendégek látogatói csak akkor tartózkodhatnak az apartmanban, ha
                korábban a hostnak bejelentették.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  4.) Elektromos eszközök
                </span>
                <br />
                A szobákba tilos gyúlékony, robbanásveszélyes anyagot vinni. A
                szendvicssütő és a kávéfőző kézi vezérlésű, amelyeket használat
                után le kell kapcsolni! NEM KAPCSOLÓDNAK le automatikusan.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  5.) Dohányzás
                </span>
                <br />
                Dohányzás szigorúan tilos. Kijelölt dohányzóhely: a ház előtt.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  6.) Csendháborítás
                </span>
                <br />
                20.00–06.00 között a házban zajtilalom van, amelynek megsértése
                rendőrségi feljelentést vonhat maga után. Kérem, legyenek
                tekintettel egymásra és a lakókra is.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  7.) Értékeink védelme, károkozás
                </span>
                <br />
                Elveszett értékekért nem vállalunk felelősséget. Kérem ezért,
                hogy a kijelentkezés alkalmával ellenőrizze, hogy semmit nem
                hagyott a lakásban. Kijelentkezés után ne vigyen el semmit, ami
                az apartman tulajdona. Károkozás esetén meg kell térítenie a
                szállásadó kárát. Nagyobb károkozás rendőrségi feljelentést von
                maga után.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  8.) Állattartás
                </span>
                <br />
                Állattartás az apartmanban szigorúan tilos.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  9.) Ablakok
                </span>
                <br />
                Ablakokat zárni kell az apartman elhagyásakor, vagy csapadékos
                időjárás esetén.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  10.) Fűtés, légkondicionálás
                </span>
                <br />
                Fűtést, légkondicionáló berendezést csak csukott ablaknál lehet
                használni és le kell kapcsolni az apartman elhagyásakor.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  11.) Biztonságos közlekedés
                </span>
                <br />A lépcsők kisebb mérete miatt fokozottabban ügyeljenek
                azokon való közlekedésre!
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  12.) Szeméttároló
                </span>
                <br />
                Ha megtelik, kérem vigyék le a fekete kukába! Lakat van rajta,
                de nincs lezárva, csak el kell húzni a reteszt.
              </li>
              <li>
                <span className="font-semibold text-sunset-burgundy">
                  13.) Rend és tisztaság
                </span>
                <br />
                Kérjük vigyázzanak a rendre és a tisztaságra mind a lakásban,
                mind a lépcsőházban!
              </li>
            </ol>

            <div className="mt-10 pt-6 border-t border-sunset-gold/20 text-center">
              <p className="text-sunset-burgundy font-semibold text-lg">
                Köszönjük, hogy minket választottak!
              </p>
              <p className="text-sunset-dark/70 italic mt-1">
                Érezzék jól magukat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
