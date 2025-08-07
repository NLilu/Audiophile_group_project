import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import FacebookIcon from "../../assets/shared/desktop/icon-facebook.svg?react";
import TwitterIcon from "../../assets/shared/desktop/icon-twitter.svg?react";
import InstaIcon from "../../assets/shared/desktop/icon-instagram.svg?react";

function Footer() {
  return (
    <footer className={`${styles.container} container`}>
      <nav className={styles.footerNav}>
        <Link to="/" className="logo"></Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/category/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/category/earphones">Earphones</Link>
          </li>
        </ul>
      </nav>
      <section className={styles.footerTxt}>
        <div className={styles.textNicon}>
          <p className={styles.text}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className={styles.footerIcons}>
            <a href="https://www.facebook.com" target="_blank">
              <FacebookIcon className={styles.socialIcon} />
            </a>
            <a href="https://x.com" target="_blank">
              <TwitterIcon className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <InstaIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.copyFlex}>
          <div>
            <p className={styles.copy}>
              &copy; 2021 Copyright. All Rights Reserved.
            </p>
          </div>
          <div className={styles.footerIconsTb}>
            <a href="https://www.facebook.com" target="_blank">
              <FacebookIcon className={styles.socialIcon} />
            </a>
            <a href="https://x.com" target="_blank">
              <TwitterIcon className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <InstaIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
