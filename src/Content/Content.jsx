export default function Content(props) {
  return (
    <>
      <section className="product_content">
        <picture className="product_image">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </picture>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </section>
    </>
  );
}
