import './App.css'

function App() {
  return (
    <main className="clinic">
      <nav aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Aura Skin Clinic home">
          <span>A</span>
          Aura Skin Clinic
        </a>
        <a className="nav-button" href="#appointments">Book Appointment</a>
      </nav>

      <section className="hero-section" id="appointments">
        <div className="hero-copy">
          <p className="eyebrow">Advanced skin care</p>
          <h1>Healthy skin, confidently you.</h1>
          <p className="intro">
            Thoughtful treatments and personalized care for your skin goals.
          </p>
          <a className="primary-button" href="mailto:hello@auraskinclinic.com">
            Schedule a consultation
          </a>
        </div>
        <div className="hero-card" aria-label="Clinic care highlights">
          <p>Expert consultation</p>
          <strong>Personalized care</strong>
          <span>Every step of the way</span>
        </div>
      </section>
    </main>
  )
}

export default App
