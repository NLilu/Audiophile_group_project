import React from "react";
import styles from "./AlertModal.module.css";

export default function AlertModal({ message, onClose }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
