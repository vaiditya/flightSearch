import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

function AutoSuggestInput({ id, value, placeholder, formItemOnChange, list }) {
  const [suggestions, setSuggestions] = useState([]);
  //Pass changes to calling component
  const onChange = (e, { newValue }) => {
    formItemOnChange(e.target.id ? e.target.id : id, newValue);
  };
  //Input props to autosuggest
  const inputProps = {
    id,
    placeholder,
    value,
    onChange,
    autoComplete: "chrome-off"
  };

  //Compute suggestions
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : list.filter(
          item => item.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  //Generate suggestion on input field
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  //Render the suggestion list
  const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

  //Render value into input box
  const getSuggestionValue = suggestion => suggestion.name;

  //Clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      getSuggestionValue={getSuggestionValue}
    />
  );
}
export default AutoSuggestInput;
