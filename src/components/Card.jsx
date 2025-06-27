import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
