import React, { useState } from "react";
import Calendar from "react-calendar";

export function ReactCaledar() {
  const [value, onChange] = useState(new Date());
  console.log("teste", value);
  return (
    <div>
      <p>value selected calendar: {String(value)}</p>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
