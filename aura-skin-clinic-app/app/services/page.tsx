import { serviceCategories } from "./data";

export default function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <nav className="categories" aria-label="Browse service categories">
        {serviceCategories.map(category => (
          <a key={category.id} href={`#${category.id}`}>
            {category.name}<span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      {serviceCategories.map(category => (
        <section key={category.id} id={category.id}>
          <h2>{category.name}</h2>
          <ul>{category.services.map(service => <li key={service}>{service}</li>)}</ul>
        </section>
      ))}
    </div>
  );
}
