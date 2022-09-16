import React, { useReducer } from "react";
const initialState = { count: 0 };

type counterState = {
  count: number;
};

type counterAction = {
  type: string;
  payload: number;
};

function reducer(state: counterState, action: counterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
