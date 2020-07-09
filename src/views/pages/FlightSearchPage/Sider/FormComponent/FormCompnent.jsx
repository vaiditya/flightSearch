import React from "react";
import Proptypes from "prop-types";
import AutoSuggestInput from "views/common/AutoSuggestInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "icons/calendar.png";
import { cities, passengersList } from "config";

/**
 * Memoized component for form render
 * @param {Object} props
 */
function FormComponent({
  formItems,
  setFormItems,
  getSearchResults,
  isReturn,
  error
}) {
  const { origin, destination, startDate, returnDate } = formItems;
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

FormComponent.propTypes = {
  formItems: Proptypes.object,
  setFormItems: Proptypes.func,
  getSearchResults: Proptypes.func,
  isReturn: Proptypes.bool,
  error: Proptypes.object
};

export default React.memo(FormComponent);
