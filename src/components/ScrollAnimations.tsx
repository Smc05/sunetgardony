"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.classList.add("fade-in-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
