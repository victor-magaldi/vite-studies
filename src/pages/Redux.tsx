import React from "react";
import { useSelector } from "react-redux";

export function Redux() {
  const state = useSelector((state) => state);
  console.log("state", state);
  return <div>Redux</div>;
}
