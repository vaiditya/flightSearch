import React, { useState } from "react";
import FormComponent from "./FormCompnent";
import { payloadFormatter } from "./formatPayload";

function SearchForm({ getSearchResults }) {
  const [formItems, setFormItems] = useState({
    origin: "",
    destination: "",
    startDate: new Date(),
    returnDate: new Date(),
    numberOfPassengers: ""
  });
  const [journeyType, setJourneyType] = useState("one-way");

  const getResults = () => {
    getSearchResults(payloadFormatter(formItems), journeyType);
  };

  const handleJourneyType = type => {
    setJourneyType(type);
  };

  return (
    <div className="sider">
      <div className="side-content">
        <div>
          <button
            className={journeyType === "one-way" && `selected`}
            onClick={() => handleJourneyType("one-way")}
          >
            One Way
          </button>
          <button
            className={journeyType === "return" && `selected`}
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
    </div>
  );
}

export default SearchForm;
