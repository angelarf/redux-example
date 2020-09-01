const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "COUNTER_INCREMENT":
      return state + 1;
    case "COUNTER_DECREMENT":
      return state - 1;
    case "COUNTER_SUM":
      return state + payload;
    default:
      return state;
  }
};

export default counterReducer;
