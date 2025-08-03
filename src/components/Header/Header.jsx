import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "/assets/shared/desktop/icon-cart.svg";
import CartModal from "../../components/CartModal";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, [isCartOpen]);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    const interval = setInterval(updateCartCount, 500);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <header className={`${styles.container} container`}>
      <nav className={styles.header}>
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

        <div onClick={() => setIsCartOpen(true)} className={styles.cartLink}>
          <img src={CartIcon} alt="Cart icon" />
          {cartCount > 0 && (
            <span className={styles.cartCount}>{cartCount}</span>
          )}
        </div>
      </nav>

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}

export default Header;
