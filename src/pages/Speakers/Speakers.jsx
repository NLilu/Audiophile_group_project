import React from "react";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import ProductList from "../../components/ProductList";

function Speakers() {
  const speakerSlugs = ["zx9-speaker", "zx7-speaker"];
  return (
    <section className="container">
      <ProductList filterSlugs={speakerSlugs} categoryName="SPEAKERS" />
      <Category />
      <About />
    </section>
  );
}

export default Speakers;
