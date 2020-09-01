export const incrementAction = () => ({ type: "COUNTER_INCREMENT" });

export const decrementAction = () => ({ type: "COUNTER_DECREMENT" });

export const sumAction = (payload) => ({ type: "COUNTER_SUM", payload });

export const asyncSum = () => async (dispatch) => {
  setTimeout(() => {
    console.log("opa");
    dispatch(incrementAction());
    dispatch(sumAction(30));
  }, 2000);
  // dispatch(loading());
  // try {
  //    const response = await axios.get();
  //   dispatch(updateDate(respose.data));
  //   dispatch(feedback("success"));
  // } catch (e) {
  //   dispatch(feedback("error"));
  // }
};
