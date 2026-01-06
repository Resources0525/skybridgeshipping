import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>SkyBridge Shipping</h1>
        <nav>
          <Link href="#services">Services</Link>
          <Link href="#tracking">Tracking</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>From Your Doorstep to the World</h2>
        <p>
          Reliable local and international shipping with real-time tracking,
          package images, and customs transparency.
        </p>
        <button className="btn btn-primary">Track Shipment</button>
        <button className="btn btn-secondary">Ship With Us</button>
      </section>

      <section id="tracking" className="tracking">
        <h3>Track Your Shipment</h3>
        <input type="text" placeholder="Enter Tracking Number" />
      </section>

      <section id="services" className="services">
        <div className="card">
          <h3>🚚 Local Delivery</h3>
          <p>
            Fast same-day and next-day delivery for businesses and individuals.
          </p>
        </div>
        <div className="card">
          <h3>✈️ International Shipping</h3>
          <p>
            Worldwide air and sea freight with customs handling and
            transparency.
          </p>
        </div>
      </section>

      <footer id="contact">
        <p>© 2026 SkyBridge Shipping. All rights reserved.</p>
      </footer>
    </main>
  );
}
