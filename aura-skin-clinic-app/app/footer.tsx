import Image from "next/image";
import Link from "next/link";
import FooterSocials, { WhatsAppIcon } from "./footer-socials";
import logo from "../public/logo/aura-wordmark.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Aura Plus home">
            <Image src={logo} alt="" sizes="106px" />
            <sup aria-hidden="true">+</sup>
          </Link>
          <p className="footer-clinic-name">Family Health Care &amp; Skin Clinic</p>
          <p className="footer-doctor">By Dr. Samantha</p>
          <FooterSocials />
        </div>

        <nav className="footer-links" aria-labelledby="footer-explore-title">
          <h2 id="footer-explore-title">Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <address className="footer-contact-list">
            <a className="footer-contact-item footer-contact-location" href="https://www.google.com/maps/search/?api=1&query=AURA+Family+Health+Care+Skin+Clinic+82+Sri+Rathanapala+Mawatha+Isadeen+Town+Matara+Sri+Lanka" target="_blank" rel="noopener noreferrer" aria-label="Find Aura at No. 82, Sri Rathanapala Mawatha, Isadeen Town, Matara, Sri Lanka on Google Maps">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
              <span>No. 82, Sri Rathanapala Mawatha<br />Isadeen Town, Matara<br />Sri Lanka</span>
            </a>
            <a className="footer-contact-item" href="tel:+94777682014" aria-label="Call Aura on +94 77 768 2014">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="m6.6 10.8 2.6-2.6L6 2.5 2 3c-1 9.7 9.3 20 19 19l.5-4-5.7-3.2-2.6 2.6a17 17 0 0 1-6.6-6.6Z" /></svg>
              <span>+94 77 768 2014</span>
            </a>
            <a className="footer-contact-item" href="https://wa.me/94777682014" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Aura on +94 77 768 2014">
              <WhatsAppIcon />
              <span>+94 77 768 2014</span>
            </a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Aura Family Health Care &amp; Skin Clinic. All rights reserved.</p>
        <p className="footer-developer">developed by <a href="https://www.linkedin.com/in/sahan-jayasinghe-9378472a9/" target="_blank" rel="noopener noreferrer">J.G.D.S.D. Jaysinghe</a></p>
      </div>
    </footer>
  );
}
