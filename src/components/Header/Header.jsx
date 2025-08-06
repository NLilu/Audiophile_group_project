// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styles from "./Header.module.css";
// import CartIcon from "/assets/shared/desktop/icon-cart.svg";
// import CartModal from "../../components/CartModal";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Header() {
//   const location = useLocation();
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (location.pathname === "/checkout" && isCartOpen) {
//       setIsCartOpen(false);
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(stored);
//   }, [isCartOpen]);

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//       setCartCount(totalCount);
//     };

//     updateCartCount();
//     window.addEventListener("storage", updateCartCount);
//     const interval = setInterval(updateCartCount, 500);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("storage", updateCartCount);
//     };
//   }, []);

//   useEffect(() => {
//     if (
//       location.pathname !== "/checkout" &&
//       sessionStorage.getItem("preventCartOpen") === "true"
//     ) {
//       setIsCartOpen(false);
//       sessionStorage.removeItem("preventCartOpen");
//     }
//   }, [location.pathname]);

//   const handleCartClick = () => {
//     if (location.pathname !== "/checkout") {
//       setIsCartOpen(true);
//     }
//   };

//   return (
//     <header className={`${styles.container} container`}>
//       <nav className={styles.header}>
//         <Link to="/" className="logo"></Link>

//         <ul className={styles.navLinks}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/category/headphones">Headphones</Link>
//           </li>
//           <li>
//             <Link to="/category/speakers">Speakers</Link>
//           </li>
//           <li>
//             <Link to="/category/earphones">Earphones</Link>
//           </li>
//         </ul>

//         <div onClick={handleCartClick} className={styles.cartLink}>
//           <img src={CartIcon} alt="Cart icon" />
//           {cartCount > 0 && (
//             <span className={styles.cartCount}>{cartCount}</span>
//           )}
//         </div>
//       </nav>

//       {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
//     </header>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "/assets/shared/desktop/icon-cart.svg";
import CartModal from "../../components/CartModal";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/checkout" && isCartOpen) {
      setIsCartOpen(false);
    }
  }, [location.pathname]);

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
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          <GiHamburgerMenu color="white" size={24} />
        </div>

        <div className={styles.logoDiv}>
          <Link to="/" className="logo"></Link>
        </div>

        <ul
          className={`${styles.navLinks} ${hamburgerOpen ? styles.open : ""}`}
        >
          <li>
            <Link to="/" onClick={() => setHamburgerOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/category/headphones"
              onClick={() => setHamburgerOpen(false)}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/category/speakers"
              onClick={() => setHamburgerOpen(false)}
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/category/earphones"
              onClick={() => setHamburgerOpen(false)}
            >
              Earphones
            </Link>
          </li>
        </ul>

        <div onClick={handleCartClick} className={styles.cartLink}>
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
