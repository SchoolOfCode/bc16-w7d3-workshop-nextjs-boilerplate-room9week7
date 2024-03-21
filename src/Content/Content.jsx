export default function Content(props) {
  return (
    <>
      <section className="product_content">
        <picture className="product_image">
          <img src={props.img} alt={props.alt} />
        </picture>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </section>
    </>
  );
}
