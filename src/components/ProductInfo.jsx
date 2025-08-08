import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import Button from "./Button";
import styles from "../components/ProductInfo.module.css";
import YouMay from "../components/YouMay";
import GoBack from "../components/GoBack";

function ProductInfo() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity,
      image: `/assets/product-${product.slug}/desktop/image-product.jpg`,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find(
      (item) => item.slug === product.slug
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <section className="container">
      <div className={styles.GoBackWrapper}>
        <GoBack />
      </div>

      <div className={styles.firstDiv}>
        <div className={styles.image}>
          <picture>
            <source
              media="(max-width: 375px)"
              srcSet={`/assets/product-${product.slug}/mobile/image-product.jpg`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`/assets/product-${product.slug}/tablet/image-product.jpg`}
            />
            <img
              src={`/assets/product-${product.slug}/desktop/image-product.jpg`}
              alt={product.name}
            />
          </picture>
        </div>

        <div className={styles.desc}>
          {product.new && <h6 className={styles.new}>NEW PRODUCT</h6>}
          <h2 className={styles.name}>{product.name.toUpperCase()}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>$ {product.price.toLocaleString()}</p>

          <div className={styles.btnWrapper}>
            <div className={styles.quantityWrapper}>
              <button onClick={handleDecrease} className="btn btn-quaternary">
                -
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button onClick={handleIncrease} className="btn btn-quaternary">
                +
              </button>
            </div>
            <Button variant="primary" onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.features}>
          <h3>FEATURES</h3>
          <p className={styles.feature}>{product.features}</p>
        </div>

        <div className={styles.includes}>
          <div>
            <h3>IN THE BOX</h3>
          </div>
          <div>
            <ul>
              {product.includes.map((include, id) => (
                <li key={id}>
                  <span className={styles.qty}>{include.quantity}x</span>
                  <span className={styles.itm}>{include.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.gridDiv}>
        <img
          className={styles.firstImg}
          src={`/assets/product-${product.slug}/desktop/image-gallery-1.jpg`}
          alt={`${product.name} gallery 1`}
        />
        <img
          className={styles.secondImg}
          src={`/assets/product-${product.slug}/desktop/image-gallery-2.jpg`}
          alt={`${product.name} gallery 2`}
        />
        <img
          className={styles.largeImage}
          src={`/assets/product-${product.slug}/desktop/image-gallery-3.jpg`}
          alt={`${product.name} gallery 3`}
        />
      </div>

      <YouMay recommended={product.others} />
    </section>
  );
}

export default ProductInfo;
