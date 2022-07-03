import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h3>React-datepicker</h3>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};
