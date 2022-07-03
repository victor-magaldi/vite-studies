import { useState } from "react";
import DatePicker from "react-datepicker";
import {setDefaultLocale} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerPage = () => {
  const [startDate, setStartDate] = useState( new Date());

  return (
    <div>
      <h3>React-datepicker</h3>
      <DatePicker
        showTimeSelect
        timeIntervals={15}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy h:mm aa"
        formatWeekDay={(nameOfDay) => <span>{nameOfDay.substr(0, 3)}</span>}
      />
    </div>
  );
};
