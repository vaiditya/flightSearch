import React from "react";
import AutoSuggestInput from "../../../../common/AutoSuggestInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const cities = [
  { name: "Pune (PNQ)" },
  { name: "Mumbai (BOM)" },
  { name: "Bengaluru (BLR)" },
  { name: "Delhi (DEL)" }
];
function FormComponent({
  formItems,
  setFormItems,
  getSearchResults,
  isReturn
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
      <div className="form-item">
        <DatePicker
          selected={startDate}
          onChange={date => onChange("startDate", date)}
          dateFormat="yyyy/MM/dd"
        />
      </div>

      <div className="form-item">
        <DatePicker
          selected={returnDate}
          onChange={date => onChange("returnDate", date)}
          dateFormat="yyyy/MM/dd"
          disabled={!isReturn}
        />
      </div>

      <div className="form-item">
        <button className="btn submit" onClick={getSearchResults}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FormComponent;
