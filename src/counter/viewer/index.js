import React from "react";
import { connect } from "react-redux";

import { selectCounter } from "../selectors";

import "./style.css";

const CounterViewer = ({ value, banana }) => {
  return <div className="viewer-wrapper">{banana}</div>;
};

const mapStateToProps = (state) => ({
  banana: selectCounter(state),
  value: state.counter,
});

export default connect(mapStateToProps)(CounterViewer);
