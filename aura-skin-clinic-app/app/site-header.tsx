"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import logo from "../public/logo/aura-wordmark.png";
import Navigation from "./navigation";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (!header) return;

      const hero = document.querySelector(".home-hero");
      const pastLanding = hero && hero.getBoundingClientRect().bottom <= header.offsetHeight;
      header.dataset.scrolled = pastLanding ? "true" : "false";
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <header className="masthead" ref={headerRef}>
      <Link className="wordmark" href="/" aria-label="Aura Plus home">
        <Image src={logo} alt="" sizes="106px" />
        <sup aria-hidden="true">+</sup>
      </Link>
      <Navigation />
    </header>
  );
}
