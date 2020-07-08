import React, { useState } from "react";
import FormComponent from "./FormCompnent";
import { payloadFormatter } from "./formatPayload";

function SearchForm({ getSearchResults }) {
  const [formItems, setFormItems] = useState({
    origin: "",
    destination: "",
    startDate: new Date(),
    returnDate: new Date(),
    numberOfPassengers: 1
  });
  const [error, setError] = useState({ status: false, errMsg: "" });
  const [journeyType, setJourneyType] = useState("one-way");

  const getResults = () => {
    const { origin, destination } = formItems;
    if (origin && destination && origin !== destination) {
      error.status &&
        setError({
          status: false
        });
      getSearchResults(payloadFormatter(formItems), journeyType);
    } else {
      setError({
        status: true,
        errMsg: "Source or Destination error"
      });
    }
  };

  const handleJourneyType = type => {
    setJourneyType(type);
  };

  return (
    <div className="side-content">
      <div>
        <button
          className={`nav-btn ${journeyType === "one-way" ? "selected" : ""}`}
          onClick={() => handleJourneyType("one-way")}
        >
          One Way
        </button>
        <button
          className={`nav-btn ${journeyType === "return" ? "selected" : ""}`}
          onClick={() => handleJourneyType("return")}
        >
          Return
        </button>
      </div>
      <FormComponent
        formItems={formItems}
        setFormItems={setFormItems}
        getSearchResults={getResults}
        isReturn={journeyType === "return"}
        error={error}
      />
    </div>
  );
}

export default SearchForm;
