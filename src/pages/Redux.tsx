import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function Redux() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("state", state);
  const increment = () => {
    dispatch({ type: "INCREMENTAR" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENTAR" });
  };
  return (
    <div>
      <h5>Redux</h5>
      <button onClick={decrement}>DECREMENTAR</button>
      <button onClick={increment}>INCREMENTAR</button>
      <br />
      state Value {String(state)}
    </div>
  );
}
