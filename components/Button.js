import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  const onClick = () => {
    alert("click!");
  };
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "black"
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

export default Button;
