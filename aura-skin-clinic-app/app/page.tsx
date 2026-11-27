import Image from "next/image";
import Link from "next/link";
import IntroductionReveal from "./introduction-reveal";
import girlPortrait from "../public/logo/girl-cutout.png";
import boyPortrait from "../public/logo/boy-cutout.png";
import treatment from "../public/aura-treatment.webp";

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="clinic-title">
        <div className="hero-copy">
          <h1 id="clinic-title">
            <span className="clinic-name">Aura</span>
            <span className="family-care">Family Health Care</span>
            <span className="skin-clinic">&amp; Skin Clinic</span>
          </h1>
          <p className="doctor-credit">By Dr. Samantha</p>
          <div className="hero-actions">
            <Link className="button button-cream" href="/services">Explore our services</Link>
          </div>
          <p className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Isadeen town, Matara
          </p>
        </div>
  
        <figure className="hero-video">
          <Image
            src={treatment}
            alt="Facial treatment preview for the clinic video"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            preload
          />
          <figcaption>
            <span>Inside Aura</span>
            <span className="film-status">Video placeholder · footage to be added</span>
          </figcaption>
        </figure>
      </section>
      <IntroductionReveal>
        <div className="campaign-portrait portrait-woman">
          <Image
            src={girlPortrait}
            alt="Portrait of a woman"
            fill
            sizes="(max-width: 800px) 42vw, 25vw"
          />
        </div>
        <div className="introduction-copy">
          <h2 id="introduction-title">
            For women.<br />For men. <em>For you.</em>
          </h2>
          <p>
            We bring skin, hair, body and aesthetic care together with family
            healthcare. Our unisex services welcome women and men, with care
            tailored to your individual needs.
          </p>
          <Link className="button button-outline" href="/services">
            Explore our services
          </Link>
        </div>
        <div className="campaign-portrait portrait-man">
          <Image
            src={boyPortrait}
            alt="Portrait of a man"
            fill
            sizes="(max-width: 800px) 42vw, 25vw"
          />
        </div>
      </IntroductionReveal>
      <IntroductionReveal className="doctor-introduction" labelledBy="doctor-title">
        <div className="campaign-portrait doctor-portrait">
          <Image
            src="/logo/doctor-cutout.png"
            alt="Dr. Samantha Weththasinghe"
            fill
            sizes="(max-width: 800px) 85vw, 40vw"
          />
        </div>
        <div className="doctor-copy">
          <h2 id="doctor-title">Your skin clinic.<br />Your family doctor.</h2>
          <p>
            With <strong className="doctor-experience">20+ years</strong> of
            experience, <em className="doctor-name">Dr. Samantha Weththasinghe</em> is
            trusted by patients as their first choice for care.
          </p>
          <Link className="button button-outline" href="/about">
            About us
          </Link>
        </div>
      </IntroductionReveal>
    </>
  );
}
