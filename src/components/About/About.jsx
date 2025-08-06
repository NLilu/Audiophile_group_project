import styles from "./About.module.css";
import BestGearImage from "/assets/shared/desktop/image-best-gear.jpg";

function About() {
  // return (
  //   <section className="container">
  //     <div className={styles.flexContainer}>
  //       <div className={styles.aboutText}>
  //         <h2 className={styles.aboutTitle}>
  //           BRINGING YOU THE <span>BEST</span> AUDIO GEAR
  //         </h2>
  //         <p className={styles.aboutPara}>
  //           Located at the heart of New York City, Audiophile is the premier
  //           store for high end headphones, earphones, speakers, and audio
  //           accessories. We have a large showroom and luxury demonstration rooms
  //           available for you to browse and experience a wide range of our
  //           products. Stop by our store to meet some of the fantastic people who
  //           make Audiophile the best place to buy your portable audio equipment.
  //         </p>
  //       </div>

  //       <div className={styles.aboutImage}>
  //         <img src={BestGearImage} alt="Man in headphones" />
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="container">
      <div className={styles.flexContainer}>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p className={styles.aboutPara}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className={styles.aboutImage}>
          <picture>
            {/* Mobile first: applies only at max-width 375px */}
            <source
              media="(max-width: 375px)"
              srcSet="/assets/shared/mobile/image-best-gear.jpg"
            />
            {/* Tablet: applies at 376px - 768px */}
            <source
              media="(max-width: 768px)"
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
            />
            {/* Desktop is default */}
            <img
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Man in headphones"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default About;
