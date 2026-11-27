import Image from "next/image";
import { serviceCategories } from "./data";
import ServiceDetails from "./service-details";

const categoryImages = ["skin", "hair", "body", "aesthetic", "family"];
const descriptions = [
  "Treatments for acne, pigmentation, scars and skin health.",
  "Care for hair fall, dandruff and scalp conditions.",
  "Body shaping, skin tightening and diet planning.",
  "Facials, grooming and everyday beauty care.",
  "Everyday medical care for you and your family.",
];

export default function Services() {
  return (
    <div className="services">
      <header className="services-heading">
        <p className="services-eyebrow">Care at Aura</p>
        <h1>Our services</h1>
        <p>Skin, hair, body and aesthetic treatments. Family healthcare, too.</p>
      </header>
      <nav className="categories" aria-label="Browse service categories">
        {serviceCategories.map((category, index) => (
          <a className="category-card" key={category.id} href={`#${category.id}`}>
            <div className="category-image">
              <Image
                src={`/services/${categoryImages[index]}.jpg`}
                alt=""
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 20vw"
                className={`category-photo category-photo-${category.id}`}
              />
            </div>
            <div className="category-copy">
              <h2>{category.name}</h2>
              <p>{descriptions[index]}</p>
            </div>
          </a>
        ))}
      </nav>
      <ServiceDetails />
    </div>
  );
}
