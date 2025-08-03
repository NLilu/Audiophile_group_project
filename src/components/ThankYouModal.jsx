import React from "react";
import styles from "../components/ThankYouModal.module.css";

function ThankYouModal({ onClose, grandTotal, cart }) {
  const mainItem = cart[0];
  const otherItemsCount = cart.length - 1;

  return (
    <div className="container">
      <div className={styles.overlayTks}>
        <div className={styles.modal}>
          <div className={styles.checkIcon}>✓</div>
          <h2>
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h2>
          <p>You will receive an email confirmation shortly.</p>

          <div className={styles.orderSummary}>
            <div className={styles.leftBox}>
              <div className={styles.item}>
                <img src={mainItem.image} alt={mainItem.name} />
                <div>
                  <p className={styles.name}>{mainItem.name}</p>
                  <p className={styles.price}>${mainItem.price}</p>
                </div>
                <p className={styles.qty}>x{mainItem.quantity}</p>
              </div>
              {otherItemsCount > 0 && (
                <p className={styles.otherItems}>
                  and {otherItemsCount} other item(s)
                </p>
              )}
            </div>
            <div className={styles.totalBox}>
              <p className={styles.totalLabel}>GRAND TOTAL</p>
              <p className={styles.totalAmount}>
                ${grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <button className={styles.backBtn} onClick={onClose}>
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYouModal;
