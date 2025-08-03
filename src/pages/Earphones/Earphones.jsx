import React from "react";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import ProductList from "../../components/ProductList";

function Earphones() {
  const earphoneSlugs = ["yx1-earphones"];

  return (
    <section className="container">
      <ProductList filterSlugs={earphoneSlugs} categoryName="EARPHONES" />
      <Category />
      <About />
    </section>
  );
}

export default Earphones;
