import "./Hero.css";

export default function Hero(props) {
  return (
    <section className="hero">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <h2>{props.title}</h2>
      <p>
        {props.paragraph} <span className="consultation">0121 345 6789</span>
      </p>
    </section>
  );
}
