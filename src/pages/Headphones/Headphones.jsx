import React from "react";
import About from "../../components/About/About";
import ProductList from "../../components/ProductList";
import Category from "../../components/Category/Category";

function Headphones() {
  const headphoneSlugs = [
    "xx99-mark-two-headphones",
    "xx99-mark-one-headphones",
    "xx59-headphones",
  ];

  return (
    <section className="container">
      <ProductList filterSlugs={headphoneSlugs} categoryName="HEADPHONES" />
      <Category />
      <About />
    </section>
  );
}

export default Headphones;
