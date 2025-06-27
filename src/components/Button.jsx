import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", onClick }) => {
  const base = "px-4 py-2 rounded font-semibold transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
};

export default Button;
