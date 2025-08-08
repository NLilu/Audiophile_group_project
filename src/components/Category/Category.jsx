import React from "react";
import Button from "../Button";
import HeadphonesImage from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImage from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImage from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import IconArrowRight from "/assets/shared/desktop/icon-arrow-right.svg";
import styles from "./Category.module.css";

function Category() {
  return (
    <section className={`container`}>
      <section className={styles.categoryLinks}>
        <div className={styles.categoryItem}>
          <img src={HeadphonesImage} alt="Headphones image"></img>
          <p className={styles.categoryPara}>headphones</p>
          <Button variant="quaternary" to="/category/headphones">
            shop <img src={IconArrowRight} alt="right arrow icon"></img>
          </Button>
        </div>

        <div className={styles.categoryItem}>
          <img src={SpeakerImage} alt="Speaker image"></img>
          <p className={styles.categoryPara}>speakers</p>
          <Button variant="quaternary" to="/category/speakers">
            shop <img src={IconArrowRight} alt="right arrow icon"></img>
          </Button>
        </div>

        <div className={styles.categoryItem}>
          <img src={EarphonesImage} alt="Earphones image"></img>
          <p className={styles.categoryPara}>earphones</p>

          <Button variant="quaternary" to="/category/earphones">
            shop <img src={IconArrowRight} alt="right arrow icon"></img>
          </Button>
        </div>
      </section>
    </section>
  );
}

export default Category;
