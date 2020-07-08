import React from "react";

function RangePicker({ onRangeChange }) {
  const rangeChanged = e => {
    onRangeChange(Number(e.target.value));
  };
  return (
    <div>
      <input
        type="range"
        min={3000}
        max={30000}
        step={1000}
        onChange={rangeChanged}
      />
    </div>
  );
}

export default RangePicker;
