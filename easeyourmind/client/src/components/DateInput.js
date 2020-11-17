import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ changeDate, date }) => {
  return (
    <div>
      <DatePicker className="form"
        selected={date}
        onChange={changeDate}
      />
    </div>
  );
}

export default DateInput
