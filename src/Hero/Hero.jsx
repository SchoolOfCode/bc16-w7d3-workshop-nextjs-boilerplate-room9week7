export default function Hero(props) {
  return (
    <>
      <section className="hero">
        <picture className="hero-image">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </picture>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </section>
    </>
  );
}
