import Image from "next/image";
import Link from "next/link";
import FooterSocials from "./footer-socials";
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
          <address>
            Isadeen town, Matara<br />
            Sri Lanka
          </address>
          <p>Call for appointments</p>
          <a className="footer-phone" href="tel:+94777682014">
            077 768 2014 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AURA Family Health Care &amp; Skin Clinic. All rights reserved.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
