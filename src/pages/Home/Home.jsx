import React from "react";
import HeroBgHeadphones from "../../assets/product-xx99-mark-two-headphones/desktop/xx-99.jpg";
import SpeakersZx9 from "../../assets/product-zx9-speaker/desktop/image-product.png";
// import SpeakersZx7 from "../../assets/home/desktop/image-speaker-zx7";
import Earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button from "../../components/Button";
import Category from "../../components/Category/Category";
import About from "../../components/About/About";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={`${styles.mainContainer} container`}>
        <div className={`${styles.heroContainer} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <p className={styles.promo}>NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p className={styles.heroPara}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button variant="primary" to="/product/xx99-mark-two-headphones">
              SEE PRODUCT
            </Button>
          </div>
          <div className={styles.heroImage}>
            <img src={HeroBgHeadphones} alt="black headphones" />
          </div>
        </div>
      </main>

      <Category />

      <section className={`${styles.category} container`}>
        <div className={styles.zx9}>
          <div className={styles.zx9Image}>
            <img src={SpeakersZx9} alt="black speakers" />
          </div>

          <div className={styles.zx9Text}>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button variant="secondary" to="/product/zx9-speaker">
              SEE PRODUCT
            </Button>
          </div>
        </div>

        <div className={styles.zx7}>
          <h4>ZX7 SPEAKER</h4>
          <Button variant="tertiary" to="/product/zx7-speaker">
            SEE PRODUCT
          </Button>
        </div>

        <div className={styles.yx1}>
          <div className={styles.yx1Image}>
            <img src={Earphones} alt="black earphones" />
          </div>
          <div className={styles.yx1Text}>
            <h4>ZX7 EARPHONES</h4>
            <Button variant="tertiary" to="/product/zx7-speaker">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
