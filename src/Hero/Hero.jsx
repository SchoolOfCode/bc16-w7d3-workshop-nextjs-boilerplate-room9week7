import "./Hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <img src="images/hero-mobile.png" alt="Hero Image" />
      <h2>Discover the Perfect Fireplace.....</h2>
      <p><Link href="/booking">Book consultation</Link></p>
    </section>
  );
}
