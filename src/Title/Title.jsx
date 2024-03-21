import "./Title.css";

export default function Title(props) {
  return (
    <>
      <section className="title">
        <h2>{props.title}</h2>
      </section>
    </>
  );
}
