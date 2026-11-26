"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function IntroductionReveal({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let active = true;
    section.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return;

        observer.disconnect();
        const images = Array.from(section.querySelectorAll("img"));
        Promise.all(images.map(image => image.decode().catch(() => undefined)))
          .then(() => {
            if (active) section.dataset.reveal = "visible";
          });
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => {
      active = false;
      observer.disconnect();
      delete section.dataset.reveal;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-introduction"
      aria-labelledby="introduction-title"
    >
      {children}
    </section>
  );
}
