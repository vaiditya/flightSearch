import React from "react";
import AutoSuggestInput from "views/common/AutoSuggestInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "icons/calendar.png";
const cities = [
  { name: "Pune (PNQ)" },
  { name: "Mumbai (BOM)" },
  { name: "Bengaluru (BLR)" },
  { name: "Delhi (DEL)" }
];
const passengersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function FormComponent({
  formItems,
  setFormItems,
  getSearchResults,
  isReturn,
  error
}) {
  const {
    origin,
    destination,
    startDate,
    returnDate
    // numberOfPassengers
  } = formItems;
  const onChange = (key, value) => {
    setFormItems({ ...formItems, [key]: value });
  };

  return (
    <div className="form-container">
      <div className="form-item">
        <AutoSuggestInput
          formItemOnChange={onChange}
          value={origin}
          id="origin"
          placeholder="Enter Origin City"
          list={cities}
        />
      </div>
      <div className="form-item">
        <AutoSuggestInput
          formItemOnChange={onChange}
          value={destination}
          id="destination"
          placeholder="Enter Destination City"
          list={cities}
        />
      </div>
      <div className="form-item date-picker">
        <DatePicker
          selected={startDate}
          onChange={date => onChange("startDate", date)}
          dateFormat="yyyy/MM/dd"
        />
        <img src={calendar} alt="" />
      </div>

      <div className="form-item date-picker">
        <DatePicker
          selected={returnDate}
          onChange={date => onChange("returnDate", date)}
          dateFormat="yyyy/MM/dd"
          disabled={!isReturn}
        />
        <img src={calendar} alt="" />
      </div>
      <div className="form-item drop-down">
        <select
          name="count"
          id="numberOfPassengers"
          onChange={e => onChange(e.target.id, Number(e.target.value))}
        >
          {passengersList.map((number, index) => (
            <option key={`id-${index}`} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      {error.status && <div className="error">{error.errMsg}</div>}
      <div className="form-item">
        <button className="btn submit nav-btn" onClick={getSearchResults}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FormComponent;
