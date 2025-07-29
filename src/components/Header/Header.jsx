import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";

function Header() {
  return (
    <header className={`${styles.container} container`}>
      <nav className={styles.header}>
        <Link to="/" className="logo"></Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/category/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/category/earphones">Earphones</Link>
          </li>
        </ul>
        <button className={styles.cart}>
          <img src={CartIcon} alt="Cart icon" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
