import React from "react";
import ReactTooltip from "react-tooltip";

export default function Tooltip() {
  return (
    <>
      <p data-tip="hello world">react-tooltip</p>
      <ReactTooltip backgroundColor="#f2f2f2" textColor="#000" />
    </>
  );
}
