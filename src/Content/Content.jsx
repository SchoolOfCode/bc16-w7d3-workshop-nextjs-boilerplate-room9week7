// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg

import "./App.css";

// import a image into product content cards
// import title into h2
// import paragraph

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
