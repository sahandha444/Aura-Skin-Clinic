import type { Metadata } from "next";
import FooterSocials, { WhatsAppIcon } from "../footer-socials";

export const metadata: Metadata = {
  title: "Contact | AURA Family Health Care & Skin Clinic",
  description: "Contact Aura in Isadeen town, Matara. Call 077 768 2014 or message us on WhatsApp to discuss your visit.",
};

const directions = "https://www.google.com/maps/search/?api=1&query=AURA+Family+Health+Care+Skin+Clinic+Isadeen+Town+Matara";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-heading">
        <h1>Contact <em>Aura</em></h1>
        <p>Get in touch for appointments and enquiries.</p>
      </header>
      <div className="contact-details">
        <section className="contact-panel" aria-labelledby="contact-call-title">
          <span className="contact-panel-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3c0 3-2 4-4 4C10 21 3 14 3 7c0-2 1-4 4-4Z" /></svg>
          </span>
          <h2 id="contact-call-title">Call or message</h2>
          <p className="contact-panel-intro">Appointments &amp; enquiries</p>
          <a className="contact-main-phone" href="tel:+94777682014">077 768 2014</a>
          <div className="contact-actions">
            <a className="button contact-call-button" href="tel:+94777682014">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3c0 3-2 4-4 4C10 21 3 14 3 7c0-2 1-4 4-4Z" /></svg>
              Call us
            </a>
            <a className="button button-outline" href="https://wa.me/94777682014" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </section>
        <section className="contact-panel" aria-labelledby="contact-visit-title">
          <span className="contact-panel-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          </span>
          <h2 id="contact-visit-title">Visit Aura</h2>
          <p className="contact-panel-intro">Family Health Care &amp; Skin Clinic</p>
          <address>Isadeen town, Matara<br />Sri Lanka</address>
          <a className="button button-outline contact-directions" href={directions} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            Get directions
          </a>
        </section>
      </div>
      <div className="contact-social-section">
        <FooterSocials />
      </div>
    </div>
  );
}
