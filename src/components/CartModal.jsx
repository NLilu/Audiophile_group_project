import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CartModal.module.css";

export default function CartModal({ onClose }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const removeAll = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const updateQuantity = (id, amount) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const navigate = useNavigate();

  const shortenName = (fullName) => {
    return fullName
      .replace(/( Headphone| Speaker| Wireless Earphone)s?/g, "")
      .replace("Mark ", "MK ");
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3>Cart ({cart.length})</h3>
            <button onClick={removeAll} className={styles.removeAll}>
              Remove all
            </button>
          </div>

          <ul className={styles.itemList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <p className={styles.name}>{shortenName(item.name)}</p>
                  <p className={styles.price}>
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
                <div className={styles.quantity}>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <span>Total</span>
            <strong>$ {total.toLocaleString()}</strong>
          </div>

          <button
            className={styles.checkout}
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
      <div className={styles.backdrop} onClick={onClose}></div>
    </>
  );
}
