// import React from "react";
// import styles from "./YouMay.module.css";
// import { Link } from "react-router-dom";
// import { resolveImage } from "../utils/resolveImage";

// function YouMay({ recommended = [] }) {
//   return (
//     <section className={`container ${styles.recommendationSection}`}>
//       <h2>YOU MAY ALSO LIKE</h2>
//       <div className={styles.recommendationGrid}>
//         {recommended.map((item) => {
//           const imageSrc = resolveImage(item.image.desktop);

//           return (
//             <div key={item.slug} className={styles.recommendationItem}>
//               <img src={imageSrc} alt={item.name} className={styles.image} />
//               <h5>{item.name}</h5>
//               <Link to={`/product/${item.slug}`} className="btn btn-primary">
//                 See Product
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default YouMay;

import React from "react";
import styles from "./YouMay.module.css";
import { Link } from "react-router-dom";

function YouMay({ recommended = [] }) {
  return (
    <section className={`container ${styles.recommendationSection}`}>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className={styles.recommendationGrid}>
        {recommended.map((item) => (
          <div key={item.slug} className={styles.recommendationItem}>
            <picture>
              <source
                media="(max-width: 375px)"
                srcSet={`/assets/shared/mobile/image-${item.slug}.jpg`}
              />
              <source
                media="(max-width: 768px)"
                srcSet={`/assets/shared/tablet/image-${item.slug}.jpg`}
              />
              <img
                src={`/assets/shared/desktop/image-${item.slug}.jpg`}
                alt={item.name}
                className={styles.image}
              />
            </picture>

            <h5>{item.name}</h5>
            <Link to={`/product/${item.slug}`} className="btn btn-primary">
              See Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YouMay;
