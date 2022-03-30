import React, { useEffect, useState } from "react";

export default function Clock() {
  const [count, setCount] = useState(0);

  const interval = setInterval(() => {
    setCount(count + 1);
    clearInterval(interval);
  }, 1000);

  return <div>Clock = {count}</div>;
}
