import "./page.css";
import Hero from "../src/Hero/Hero.jsx";
import Title from "../src/Title/Title.jsx";
import Content from "../src/Content/Content.jsx";

export default function Home() {
  return (
    <>
      <Hero
        imageSrc={"images/hero-mobile.png"}
        imageAlt={"Alt text for the image"}
        title={"Discover the Perfect Fireplace....."}
        paragraph={"Book consultation 01245562"}
      />

      <Title title={"How it works."} />

      <Content
        imageSrc={"images/how-it-works-1.png"}
        imageAlt={"Image 2"}
        title={"Give us a call...."}
        paragraph={
          "Call us and book in a 'Design Consultation' on a date and time to suit you."
        }
      />
      <Content
        imageSrc={"images/how-it-works-2.png"}
        imageAlt={"Image 3"}
        title={"We come to you..."}
        paragraph={
          "We come to your home to do an assessment of the space and to yourstyle preference."
        }
      />
      <Content
        imageSrc={"images/how-it-works-3.png"}
        imageAlt={"Image 4"}
        title={"We recommend..."}
        paragraph={"We send you a bespoke set of fireplace recommendations"}
      />
    </>
  );
}
