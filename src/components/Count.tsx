import React from "react";
import Countdown from "react-countdown";

export default function Count() {
  return (
    <div>
      <Countdown date={Date.now() + 100000} />
    </div>
  );
}
