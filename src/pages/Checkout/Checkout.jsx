import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkout.module.css";
import ThankYouModal from "../../components/ThankYouModal";
import GoBack from "../../components/GoBack";
import cod from "../../../public/images/cod.png";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("e-Money");

  const formRef = useRef(null);

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

    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    if (stored.length > 0) {
      setCart(stored);
      setShowModal(true);
    }
  };

  const shortenName = (fullName) => {
    return fullName
      .replace(/( Headphone| Speaker| Wireless Earphone)s?/g, "")
      .replace("Mark ", "MK ");
  };

  return (
    <section className={`${styles.container} container`}>
      <div className={styles.GoBackWrapper}>
        <GoBack />
      </div>

      <div className={styles.checkoutPage}>
        <div className={styles.formSection}>
          <h3>Checkout</h3>
          <form ref={formRef} onSubmit={handlePayment}>
            <div className={styles.formGroup}>
              <h6>Billing Details</h6>
              <div className={styles.billingDivOne}>
                <label htmlFor="name">
                  {" "}
                  Name{" "}
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    id="name"
                    required
                  />
                </label>

                <label htmlFor="mail">
                  Email Address{" "}
                  <input
                    type="email"
                    placeholder="jane@mail.com"
                    id="mail"
                    required
                  />
                </label>
              </div>

              <div className={styles.billingDivTwo}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  id="phone"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <h6>Shipping Info</h6>
              <div className={styles.shippingDivOne}>
                <label htmlFor="address">
                  Address{" "}
                  <input
                    className={styles.address}
                    type="text"
                    placeholder="1137 Williams Avenue"
                    id="address"
                    required
                  />{" "}
                </label>
              </div>
              <div className={styles.shippingDivTwo}>
                <label htmlFor="zip">
                  ZIP Code{" "}
                  <input type="text" placeholder="1001" id="zip" required />
                </label>

                <label htmlFor="city">
                  City{" "}
                  <input
                    type="text"
                    placeholder="New York"
                    id="city"
                    required
                  />
                </label>
              </div>
              <div className={styles.shippingDivThree}>
                <label htmlFor="country">
                  Country{" "}
                  <input
                    type="text"
                    placeholder="United States"
                    id="country"
                    required
                  />
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <h6>Payment Details</h6>
              <div className={styles.radioFlex}>
                <div>
                  <label className={styles.radioLabel}> Payment Method </label>
                </div>
                <div className={styles.radioGroup}>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="e-Money"
                      checked={paymentMethod === "e-Money"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    e-Money
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {paymentMethod === "e-Money" && (
                <div className={styles.eMoneyFields}>
                  <div>
                    <label htmlFor="enumber"> e-Money Number </label>
                    <input
                      type="text"
                      placeholder="238521993"
                      id="enumber"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                    <input
                      type="password"
                      placeholder="****"
                      id="eMoneyPin"
                      name="eMoneyPin"
                      required
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "Cash on Delivery" && (
                <div className={styles.cod}>
                  <div className={styles.codImage}>
                    <img
                      src={cod}
                      alt="Cash on Delivery icon"
                      className={styles.codImage}
                    />
                  </div>
                  <div className={styles.codPara}>
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence.
                      Please ensure your address is correct so that your order
                      will not be cancelled.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className={styles.summarySection}>
          <h6>Summary</h6>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.summaryItem}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{shortenName(item.name)}</p>{" "}
                  <p>${item.price.toLocaleString()}</p>
                </div>
                <p>x{item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className={styles.totals}>
            <p>
              Total: <span>${total.toLocaleString()}</span>
            </p>
            <p>
              Shipping: <span>${shipping}</span>
            </p>
            <p>
              VAT (Included): <span>${vat.toLocaleString()}</span>
            </p>
            <p className={styles.grandTotal}>
              Grand Total: <span>${grandTotal.toLocaleString()}</span>
            </p>
          </div>

          <button
            onClick={() => formRef.current?.requestSubmit()}
            className={`${styles.payBtn} btn`}
          >
            Continue & Pay
          </button>
        </div>
      </div>

      {showModal && cart.length > 0 && (
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
