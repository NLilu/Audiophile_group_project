import React, { useState } from "react";
import styles from "../components/ThankYouModal.module.css";
import { useNavigate } from "react-router-dom";

function ThankYouModal({ onClose, grandTotal, cart }) {
  const navigate = useNavigate();
  const [viewLess, setViewLess] = useState(true);

  if (!cart || cart.length === 0) return null;

  const handleBackToHome = () => {
    localStorage.removeItem("cart");
    sessionStorage.setItem("preventCartOpen", "true");
    onClose();
    navigate("/");
  };

  const shortenName = (fullName) => {
    return fullName
      .replace(/( Headphone| Speaker| Wireless Earphone)s?/g, "")
      .replace("Mark ", "MK ");
  };

  const toggleView = () => {
    setViewLess((prev) => !prev);
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const visibleItems = viewLess ? cart.slice(0, 1) : cart;

  return (
    <div className={`${styles.TksContainer} container`}>
      <div className={styles.overlayTks} onClick={handleOverlayClick}>
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.checkIcon}>✓</div>
          <h2>
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h2>
          <p>You will receive an email confirmation shortly.</p>

          <div className={styles.orderSummary}>
            <div className={styles.leftBox}>
              {visibleItems.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemImPrQty}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.imagePrice}>
                      <p className={styles.name}>{shortenName(item.name)}</p>
                      <p className={styles.price}>
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className={styles.qty}>x{item.quantity}</p>
                  </div>
                </div>
              ))}

              {viewLess && cart.length > 1 && (
                <p className={styles.otherItems}>
                  and {cart.length - 1} other item(s)
                </p>
              )}

              {cart.length > 1 && (
                <div className={styles.itemBtn}>
                  <button onClick={toggleView} className={styles.toggleBtn}>
                    {viewLess ? "View more" : "View less"}
                  </button>
                </div>
              )}
            </div>

            <div className={styles.totalBox}>
              <p className={styles.totalLabel}>GRAND TOTAL</p>
              <p className={styles.totalAmount}>
                ${grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className={`${styles.backBtn} btn btn-primary`}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYouModal;
