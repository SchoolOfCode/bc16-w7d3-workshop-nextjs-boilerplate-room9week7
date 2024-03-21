import "./page.css";
import Hero from "../src/Hero/Hero.jsx";
import Title from "../src/Title/Title.jsx";
import Content from "../src/Content/Content.jsx";
import { ContentObject } from "../src/Content/ContentObject";

export default function Home() {
  return (
    <>
      <Hero />

      <Title />

      {/* Render a separate Content component for each item in ContentObject */}
      {ContentObject.map((item, index) => (
        <Content
          key={index}
          img={item.img}
          alt={item.alt}
          title={item.title}
          text={item.text}
        />
      ))}
    </>
  );
}
