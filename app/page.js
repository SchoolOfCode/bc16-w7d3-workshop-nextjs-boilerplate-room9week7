import "./page.css";
import Hero from "../src/Hero/Hero.jsx";
import Title from "../src/Title/Title.jsx";
import Content from "../src/Content/Content.jsx";
import { ContentObject } from "../src/Content/ContentObject";
import Reviews from "../src/Reviews/Reviews.jsx";

import Forms from "../src/Forms/Forms.jsx"; // Import path relative to the current directory

export default function Home() {
  return (
    <>
      <Hero />
      <Title />
      <Forms />
      <Reviews />

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
