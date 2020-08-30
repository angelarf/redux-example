import React, { useState } from "react";
import "./style.css";

const CounterViewer = ({ value = 0 }) => {
  return <div className="viewer-wrapper">{value}</div>;
};

export default CounterViewer;
