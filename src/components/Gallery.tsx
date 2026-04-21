"use client";

import Image from "@/components/AppImage";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/assets/images/839687427.jpg", alt: "Apartman" },
  { src: "/assets/images/839687491.jpg", alt: "Apartman" },
  { src: "/assets/images/839687503.jpg", alt: "Apartman" },
  { src: "/assets/images/839687636.jpg", alt: "Apartman" },
  { src: "/assets/images/839687657.jpg", alt: "Apartman" },
  { src: "/assets/images/839687757.jpg", alt: "Apartman" },
  { src: "/assets/images/839687819.jpg", alt: "Apartman" },
  { src: "/assets/images/839687884.jpg", alt: "Apartman" },
  { src: "/assets/images/839687937.jpg", alt: "Apartman" },
  { src: "/assets/images/839687976.jpg", alt: "Apartman" },
  { src: "/assets/images/839687981.jpg", alt: "Apartman" },
  { src: "/assets/images/839687982.jpg", alt: "Apartman" },
  { src: "/assets/images/839687991.jpg", alt: "Apartman" },
  { src: "/assets/images/839687998.jpg", alt: "Apartman" },
  { src: "/assets/images/839688007.jpg", alt: "Apartman" },
  { src: "/assets/images/839688033.jpg", alt: "Apartman" },
  { src: "/assets/images/839688042.jpg", alt: "Apartman" },
  { src: "/assets/images/839688180.jpg", alt: "Apartman" },
  { src: "/assets/images/839688195.jpg", alt: "Apartman" },
  { src: "/assets/images/839688240.jpg", alt: "Apartman" },
  { src: "/assets/images/839688297.jpg", alt: "Apartman" },
  { src: "/assets/images/839688298.jpg", alt: "Apartman" },
  { src: "/assets/images/839688310.jpg", alt: "Apartman" },
  { src: "/assets/images/839688337.jpg", alt: "Apartman" },
  { src: "/assets/images/839688364.jpg", alt: "Apartman" },
  { src: "/assets/images/839688458.jpg", alt: "Apartman" },
  { src: "/assets/images/839688464.jpg", alt: "Apartman" },
  { src: "/assets/images/839688498.jpg", alt: "Apartman" },
  { src: "/assets/images/839688526.jpg", alt: "Apartman" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <>
      {/* Collapsible grid */}
      <div className="relative">
        <div
          className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3 overflow-hidden"
          style={{
            maxHeight: isExpanded ? "9999px" : "500px",
            transition: "max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="break-inside-avoid block w-full overflow-hidden rounded-xl group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-gold"
            aria-label={`Kép megtekintése ${i + 1}`}
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-sunset-dark/0 group-hover:bg-sunset-dark/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65zM10.5 7.5v6M7.5 10.5h6"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
        </div>

        {/* Fade overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"
          style={{ opacity: isExpanded ? 0 : 1, transition: "opacity 0.5s ease" }}
        />

        {/* Expand / Collapse button */}
        <div className="relative z-10 flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded((v) => !v)}
            className="flex items-center gap-2 px-8 py-3 bg-sunset-burgundy text-white rounded-full font-semibold text-sm tracking-wide hover:bg-sunset-orange transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {isExpanded ? "Összecsukás" : "Összes kép megtekintése"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest select-none">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-sunset-gold transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Bezárás"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 text-white/70 hover:text-sunset-gold transition-colors p-3 rounded-full hover:bg-white/10"
            aria-label="Előző"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1400}
              height={900}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              quality={90}
              priority
            />
            {/* Subtle golden border */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-sunset-gold/20 pointer-events-none" />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 text-white/70 hover:text-sunset-gold transition-colors p-3 rounded-full hover:bg-white/10"
            aria-label="Következő"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4 overflow-x-auto">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden transition-all duration-200 ${
                  i === lightboxIndex
                    ? "ring-2 ring-sunset-gold scale-110"
                    : "opacity-50 hover:opacity-80"
                }`}
                aria-label={`Ugrás ${i + 1}. képre`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
