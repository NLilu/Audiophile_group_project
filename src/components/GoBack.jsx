import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GoBack.module.css";

function GoBack() {
  const navigate = useNavigate();

  return (
    <button className={styles.goBack} onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}

export default GoBack;
