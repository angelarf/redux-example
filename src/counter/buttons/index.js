import React, { useState } from "react";
import "./style.css";

const CounterButtons = ({ increment, decrement }) => {
  const handleDecrement = () => {};
  const handleIncrement = () => {};

  return (
    <div className="buttons-wrapper">
      <button className="counter-button" onClick={handleDecrement}>
        - 1
      </button>
      <button className="counter-button" onClick={handleIncrement}>
        + 1
      </button>
    </div>
  );
};

export default CounterButtons;
