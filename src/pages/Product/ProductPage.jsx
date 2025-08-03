import React from "react";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import ProductInfo from "../../components/ProductInfo";

function ProductPage() {
  return (
    <>
      <ProductInfo />
      <Category />
      <About />
    </>
  );
}

export default ProductPage;
