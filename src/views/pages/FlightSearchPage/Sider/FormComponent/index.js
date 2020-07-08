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
  const [journeyType, setJourneyType] = useState("one-way");

  const getResults = () => {
    getSearchResults(payloadFormatter(formItems), journeyType);
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
      />
    </div>
  );
}

export default SearchForm;
