"use client";

import { useEffect } from "react";
import { serviceCategories } from "./data";
import BeforeAfter from "./before-after";
import { treatmentDetails } from "./treatments";

export default function ServiceDetails() {
  useEffect(() => {
    const revealCategory = () => {
      const id = window.location.hash.slice(1);
      if (!serviceCategories.some(category => category.id === id)) return;
      const category = document.getElementById(id);
      if (category instanceof HTMLDetailsElement) category.open = true;
    };
    revealCategory();
    window.addEventListener("hashchange", revealCategory);
    const revealLinkedCategory = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!serviceCategories.some(category => category.id === id)) return;
      const category = document.getElementById(id!);
      if (category instanceof HTMLDetailsElement) category.open = true;
    };
    document.addEventListener("click", revealLinkedCategory);
    return () => {
      window.removeEventListener("hashchange", revealCategory);
      document.removeEventListener("click", revealLinkedCategory);
    };
  }, []);

  return (
    <div className="service-details">
      {serviceCategories.map(category => (
        <details className="service-category" key={category.id} id={category.id} open={category.id === "skin"}>
          <summary className="service-category-heading">
            <h2>{category.name}</h2>
            <span className="accordion-icon" aria-hidden="true" />
          </summary>
          <div className="service-treatment-list">
            {category.services.map(service => {
              const treatment = category.id === "skin" ? treatmentDetails[service] : undefined;
              if (!treatment) return <p className="treatment-name" key={service}>{service}</p>;
              return (
                <details className="treatment-detail" key={service} open={service === "Laser pigmentation removal"}>
                  <summary>
                    <h3>{service}</h3>
                    <span className="accordion-icon" aria-hidden="true" />
                  </summary>
                  <div className="treatment-content">
                    <div className="treatment-description">
                      <p className="treatment-intro">{treatment.intro}</p>
                      <p>{treatment.description}</p>
                      <p>{treatment.procedure}</p>
                      <a className="button button-outline" href="tel:+94777682014">Call for a consultation <span aria-hidden="true">↗</span></a>
                    </div>
                    <BeforeAfter
                      compare={treatment.compare}
                      assetPrefix={treatment.assetPrefix}
                      treatmentName={service}
                      beforeAlt={treatment.beforeAlt}
                      afterAlt={treatment.afterAlt}
                    />
                  </div>
                </details>
              );
            })}
          </div>
        </details>
      ))}
    </div>
  );
}
