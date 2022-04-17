import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Count() {
  const [time, setTime] = useState<unknown>(null);

  return (
    <div>
      <Countdown date={Date.now() + 100000} />;
    </div>
  );
}
