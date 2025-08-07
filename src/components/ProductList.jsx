// import React from "react";
// import { products } from "../../data";
// import Button from "./Button";
// import styles from "../components/productList.module.css";

// export default function ProductList({ filterSlugs, categoryName }) {
//   const productsToRender =
//     filterSlugs && filterSlugs.length > 0
//       ? filterSlugs
//           .map((slug) => products.find((product) => product.slug === slug))
//           .filter(Boolean)
//       : products;

//   return (
//     <>
//       <div className={styles.categoryHeader}>
//         <h2>{categoryName}</h2>
//       </div>

//       <section className={styles.productListContainer}>
//         {productsToRender.map((product, index) => (
//           <div
//             key={product.id}
//             className={`${styles.productListFlex} ${
//               index % 2 !== 0 ? styles.reverse : ""
//             }`}
//           >
//             <div className={styles.productImage}>
//               <img
//                 src={product.image.desktop.replace("./assets", "../assets")}
//                 alt={product.name}
//               />
//             </div>
//             <div className={styles.productText}>
//               {product.new && <h6 className={styles.new}>NEW PRODUCT</h6>}
//               <h2>{product.name.toUpperCase()}</h2>
//               <p>{product.description}</p>
//               <Button variant="primary" to={`/product/${product.slug}`}>
//                 SEE PRODUCT
//               </Button>
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }

import React from "react";
import { products } from "../../data";
import Button from "./Button";
import styles from "../components/productList.module.css";

export default function ProductList({ filterSlugs, categoryName }) {
  const productsToRender =
    filterSlugs && filterSlugs.length > 0
      ? filterSlugs
          .map((slug) => products.find((product) => product.slug === slug))
          .filter(Boolean)
      : products;

  return (
    <>
      <div className={styles.categoryHeader}>
        <h2>{categoryName}</h2>
      </div>

      <section className={styles.productListContainer}>
        {productsToRender.map((product, index) => {
          const imageBase = `/assets/shared`;
          const imageName = `image-${product.slug}.jpg`;

          const desktopImg = `${imageBase}/desktop/${imageName}`;
          const tabletImg = `${imageBase}/tablet/${imageName}`;
          const mobileImg = `${imageBase}/mobile/${imageName}`;

          return (
            <div
              key={product.id}
              className={`${styles.productListFlex} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.productImage}>
                <picture>
                  <source media="(max-width: 375px)" srcSet={tabletImg} />

                  <source media="(max-width: 768px)" srcSet={mobileImg} />

                  <img src={desktopImg} alt={product.name} />
                </picture>
              </div>

              <div className={styles.productText}>
                {product.new && <h6 className={styles.new}>NEW PRODUCT</h6>}
                <h2>{product.name.toUpperCase()}</h2>
                <p>{product.description}</p>
                <Button variant="primary" to={`/product/${product.slug}`}>
                  SEE PRODUCT
                </Button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
