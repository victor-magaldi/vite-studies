import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function Redux() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("state", state);
  const increment = () => {
    dispatch({ type: "INCREMENTAR" });
  };
  return (
    <div>
      Redux
      <button onClick={increment}>Increment</button>
    </div>
  );
}
