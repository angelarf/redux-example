import React, { useState } from "react";
import "./style.css";

const CounterButtons = ({ increment, decrement, incrementCustom }) => {
  const [customValue, setCustomValue] = useState(2);
  const handleDecrement = () => {};
  const handleIncrement = () => {};
  const handleIncrementCustom = () => {};
  const handleIncrementAsync = () => {};

  return (
    <div className="buttons-wrapper">
      <button className="counter-button" onClick={handleDecrement}>
        - 1
      </button>
      <button className="counter-button" onClick={handleIncrement}>
        + 1
      </button>
      <div className="counter-custom-wrapper">
        <input
          type="number"
          className="counter-input"
          value={customValue}
          onChange={({ target }) => setCustomValue(target.value)}
        />
        <button
          className="counter-button counter-button--custom"
          onClick={handleIncrementCustom}
        >
          Somar
        </button>
      </div>
      <div className="counter-custom-wrapper">
        <button
          className="counter-button counter-button--custom"
          onClick={handleIncrementAsync}
        >
          + 1 Async
        </button>
      </div>
    </div>
  );
};

export default CounterButtons;
