import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import ThankYouModal from "../../components/ThankYouModal";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  const handlePayment = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <section className="container">
      <div className={styles.checkoutPage}>
        <div className={styles.formSection}>
          <h2>Checkout</h2>

          <form onSubmit={handlePayment}>
            <div className={styles.formGroup}>
              <h3>Billing Details</h3>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className={styles.formGroup}>
              <h3>Shipping Info</h3>
              <input type="text" placeholder="Address" />
              <div className={styles.inlineInputs}>
                <input type="text" placeholder="ZIP Code" />
                <input type="text" placeholder="City" />
              </div>
              <input type="text" placeholder="Country" />
            </div>

            <div className={styles.formGroup}>
              <h3>Payment Details</h3>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="eMoney"
                    defaultChecked
                  />
                  e-Money
                </label>
                <label>
                  <input type="radio" name="payment" value="cod" />
                  Cash on Delivery
                </label>
              </div>
              <input type="text" placeholder="e-Money Number" />
              <input type="text" placeholder="e-Money PIN" />
            </div>
          </form>
        </div>

        <div className={styles.summarySection}>
          <h3>Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.summaryItem}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <p>x{item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className={styles.totals}>
            <p>Total: ${total.toLocaleString()}</p>
            <p>Shipping: ${shipping}</p>
            <p>VAT (Included): ${vat.toLocaleString()}</p>
            <p>
              <strong>Grand Total: ${grandTotal.toLocaleString()}</strong>
            </p>
          </div>
          <button onClick={handlePayment} className={`${styles.payBtn} btn`}>
            Continue & Pay
          </button>
        </div>
      </div>

      {showModal && (
        <ThankYouModal
          onClose={() => setShowModal(false)}
          grandTotal={grandTotal}
          cart={cart}
        />
      )}
    </section>
  );
}

export default Checkout;
