import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "/assets/shared/desktop/icon-cart.svg";
import CartModal from "../../components/CartModal";
import Category from "../../components/Category/Category";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const categoryMenuRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/checkout" && isCartOpen) {
      setIsCartOpen(false);
    }
  }, [location.pathname, isCartOpen]);

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

  useEffect(() => {
    if (
      location.pathname !== "/checkout" &&
      sessionStorage.getItem("preventCartOpen") === "true"
    ) {
      setIsCartOpen(false);
      sessionStorage.removeItem("preventCartOpen");
    }
  }, [location.pathname]);

  useEffect(() => {
    setShowCategoryMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.hamburger}`)
      ) {
        setShowCategoryMenu(false);
      }
    }

    if (showCategoryMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategoryMenu]);

  const handleCartClick = () => {
    if (location.pathname !== "/checkout") {
      setIsCartOpen(true);
    }
  };

  return (
    <header className={`${styles.container} container`}>
      <nav className={styles.header}>
        <div
          className={styles.hamburger}
          onClick={() => setShowCategoryMenu((prev) => !prev)}
        >
          <GiHamburgerMenu color="white" size={24} />
        </div>

        <div className={styles.logoDiv}>
          <Link to="/" className="logo"></Link>
        </div>

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

        <div onClick={handleCartClick} className={styles.cartLink}>
          <img src={CartIcon} alt="Cart icon" />
          {cartCount > 0 && (
            <span className={styles.cartCount}>{cartCount}</span>
          )}
        </div>
      </nav>

      {showCategoryMenu && (
        <div className={styles.mobileCategoryMenu} ref={categoryMenuRef}>
          <Category />
        </div>
      )}

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}
