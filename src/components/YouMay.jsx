import React from "react";
import styles from "./YouMay.module.css";
import { Link } from "react-router-dom";
import { resolveImage } from "../utils/resolveImage";

function YouMay({ recommended = [] }) {
  return (
    <section className={`container ${styles.recommendationSection}`}>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className={styles.recommendationGrid}>
        {recommended.map((item) => {
          const imageSrc = resolveImage(item.image.desktop);

          return (
            <div key={item.slug} className={styles.recommendationItem}>
              <img src={imageSrc} alt={item.name} className={styles.image} />
              <h5>{item.name}</h5>
              <Link to={`/product/${item.slug}`} className="btn btn-primary">
                See Product
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default YouMay;
