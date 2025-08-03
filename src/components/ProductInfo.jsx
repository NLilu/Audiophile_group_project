// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../../data";
// import Button from "./Button";
// import styles from "../components/ProductInfo.module.css";

// function ProductInfo() {
//   const { slug } = useParams();
//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <section className="container">
//       <div className={styles.firstDiv}>
//         <div className={styles.image}>
//           <img
//             src={product.image.desktop.replace("./assets", "../assets")}
//             alt={product.name}
//           />
//         </div>

//         <div className={styles.desc}>
//           {product.new && <h6>NEW PRODUCT</h6>}
//           <h2>{product.name.toUpperCase()}</h2>
//           <p>{product.description}</p>
//           <p>$ {product.price}</p>
//           <input type="number"></input>
//           <Button variant="primary" to={`/product/${product.slug}`}>
//             ADD TO CART
//           </Button>
//         </div>
//       </div>

//       <div className={styles.secondDiv}></div>
//       <div className={styles.gridDiv}></div>
//     </section>
//   );
// }

// export default ProductInfo;

// other category about სიით.
// გასაკეთებელია other კომპონენტი და გასამარტია კატეგორიის ყურსასმენების ლინკი
//<Button linkTo="earphones/yx1-wireless" backgroundColor="outline">
//See Product
// </Button>

/// Home, Category, About image links are to be adjusted and assets deleted from src

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import Button from "./Button";
import styles from "../components/ProductInfo.module.css";
import AlertModal from "./AlertModal";

function ProductInfo() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false); //added this line

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
      image: product.image.desktop.replace("./assets", "../assets"),
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
    // alert(`${quantity} ${product.name} added to cart!`);
    setShowAlert(true); //added this, commented out code above
  };

  return (
    <section className="container">
      <div className={styles.firstDiv}>
        <div className={styles.image}>
          <img
            src={product.image.desktop.replace("./assets", "../assets")}
            alt={product.name}
          />
        </div>

        <div className={styles.desc}>
          {product.new && <h6>NEW PRODUCT</h6>}
          <h2>{product.name.toUpperCase()}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>

          <div className={styles.quantityWrapper}>
            <button onClick={handleDecrease} className={styles.qtyBtn}>
              -
            </button>
            <span className={styles.qtyValue}>{quantity}</span>
            <button onClick={handleIncrease} className={styles.qtyBtn}>
              +
            </button>
          </div>

          <Button variant="primary" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
          {showAlert && (
            <AlertModal
              message="Added to cart!"
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
      </div>

      <div className={styles.secondDiv}></div>
      <div className={styles.gridDiv}></div>
    </section>
  );
}

export default ProductInfo;
