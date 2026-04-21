"use client";

import Link from "next/link";
import Image from "@/components/AppImage";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Kezdőlap" },
  { href: "/apartmanunk", label: "Apartmanunk" },
  { href: "/ajanlataink", label: "Ajánlataink" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sunset-dark/90 backdrop-blur-md border-b border-sunset-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo/logo-t-bg.png"
              alt="Sunset Apartment Gárdony"
              width={48}
              height={48}
              className="rounded-lg"
              style={{ width: 48, height: "auto" }}
            />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-sunset-gold hidden sm:block">
              Sunset Apartment Gárdony
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  pathname === link.href
                    ? "text-sunset-orange"
                    : "text-sunset-cream/80 hover:text-sunset-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.booking.com/hotel/hu/sunset-apartment-gardony-for-6-people-with-free-ac-free-parking.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all shadow-lg hover:shadow-sunset-orange/40 text-sm"
            >
              FOGLALÁS
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-sunset-cream p-2"
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-sunset-dark/95 backdrop-blur-md border-t border-sunset-gold/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block transition-colors text-base py-2 ${
                  pathname === link.href
                    ? "text-sunset-orange font-semibold"
                    : "text-sunset-cream/80 hover:text-sunset-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.booking.com/hotel/hu/sunset-apartment-gardony-for-6-people-with-free-ac-free-parking.hu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 px-5 py-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold rounded-full transition-all"
            >
              FOGLALÁS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
