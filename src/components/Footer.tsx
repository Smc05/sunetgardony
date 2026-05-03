import Link from "next/link";
import Image from "@/components/AppImage";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Kezdőlap" },
  { href: "/apartmanunk", label: "Apartmanunk" },
  { href: "/araink", label: "Áraink" },
  { href: "/programok", label: "Programok" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-sunset-dark text-sunset-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/logo/logo-t-bg.png"
                alt="Sunset Apartment Gárdony"
                width={40}
                height={40}
                className="rounded-lg"
                style={{ width: 40, height: "auto" }}
              />
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-sunset-gold">
                Sunset Apartment Gárdony
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Csodáld meg a Velencei-tó legszebb naplementéit a romantikus
              tetőtéri apartmanunkból.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-sunset-gold font-semibold mb-4">
              Navigáció
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-sunset-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-sunset-gold font-semibold mb-4">
              Kapcsolat
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0 text-sunset-gold/70" /> 2483 Gárdony, Körösi Csoma Sándor tér 3.</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-sunset-gold/70" /> +36 20 534 9739</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-sunset-gold/70" /> sunset.gardony@gmail.com</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-sunset-burgundy/40 flex items-center justify-center text-sunset-cream/70 hover:bg-sunset-orange hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sunset-gold/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sunset-cream/40">
          <span>© {new Date().getFullYear()} Sunset Apartment Gárdony. Minden jog fenntartva.</span>
          <Link href="/adatvedelem" className="hover:text-sunset-gold transition-colors">
            Adatvédelmi tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  );
}
