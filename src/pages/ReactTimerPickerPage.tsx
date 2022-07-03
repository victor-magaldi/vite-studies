import { useState } from "react";
import TimePicker from "react-time-picker";

export const ReactTimerPickerPage = () => {
  const [value, onChange] = useState("10:00");
  console.log("on", onChange)

  return (
    <div>
      <h3>react-timer-picker error VITE </h3>
      {/* <TimePicker onChange={ e=>{console.log("e", e)}} value={value} /> */}
    </div>
  );
};
