"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./footer-socials";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const reveal = () => { timer = setTimeout(() => setVisible(true), 1000); };
    if (document.readyState === "complete") reveal();
    else window.addEventListener("load", reveal, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", reveal);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside className="floating-contact" aria-label="Contact Aura">
      <a className="floating-contact-whatsapp" href="https://wa.me/94777682014" target="_blank" rel="noopener noreferrer" aria-label="Message Aura on WhatsApp" title="Message on WhatsApp">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
      <a className="floating-contact-call" href="tel:+94777682014" aria-label="Call Aura on 077 768 2014" title="Call 077 768 2014">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3c0 3-2 4-4 4C10 21 3 14 3 7c0-2 1-4 4-4Z" /></svg>
        <span>Call us</span>
      </a>
    </aside>
  );
}
