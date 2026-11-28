import type { Metadata } from "next";
import Image from "next/image";
import doctor from "../../public/logo/doctor.jpeg";

export const metadata: Metadata = {
  title: "About Aura | Family Healthcare & Skin Clinic in Matara",
  description: "Meet Dr. Samantha Weththasinghe and learn about Aura Family Health Care & Skin Clinic in Isadeen Town, Matara.",
};

export default function About() {
  return (
    <div className="about-page">
      <header className="about-heading">
        <h1>About <em>Aura</em></h1>
        <p>Meet the doctor. Get to know the place.</p>
      </header>

      <section className="about-doctor" aria-labelledby="about-doctor-title">
        <figure className="about-doctor-photo">
          <Image src={doctor} alt="Dr. Samantha Weththasinghe seated at his clinic desk" sizes="(max-width: 700px) 90vw, 40vw" preload />
        </figure>
        <div className="about-copy">
          <h2 id="about-doctor-title">Dr. Samantha Weththasinghe</h2>
          <div className="about-doctor-bio">
            <p>Our clinic in Matara is led by Dr. Samantha Weththasinghe, whose qualifications include <span className="about-qualification">MBBS (Karapitiya)</span> and <span className="about-qualification">FCAM (India)</span>.</p>
            <p>Most of our treatments are carried out personally by Dr. Samantha Weththasinghe, with selected aesthetic treatments provided by other members of our team.</p>
          </div>
        </div>
      </section>

      <section className="about-clinic" aria-labelledby="about-clinic-title">
        <div className="about-copy">
          <h2 id="about-clinic-title">Our clinic in Isadeen Town</h2>
          <p>Aura is located on Sri Rathanapala Mawatha in Isadeen Town, Matara, near the Matara–Akuressa Highway.</p>
        </div>
        <div className="about-visit-details">
          <h3>Aura Family Health Care &amp; Skin Clinic</h3>
          <address>No. 82, Sri Rathanapala Mawatha<br />Isadeen Town, Matara<br />Sri Lanka</address>
        </div>
      </section>

    </div>
  );
}
