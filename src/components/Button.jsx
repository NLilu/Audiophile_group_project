import React from "react";
import { Link } from "react-router-dom";

function Button({ children, variant = "primary", to, onClick, className }) {
  const buttonClasses = `btn btn-${variant} ${className || ""}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;
