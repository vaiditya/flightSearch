import React, { useState } from "react";

function RangePicker({ onRangeChange }) {
  const [range, setRange] = useState(0);
  const rangeChanged = e => {
    onRangeChange(Number(e.target.value));
    setRange(Number(e.target.value));
  };
  return (
    <div id="range-filter">
      <label className="title">Refine flight search</label>
      <div className="value-container">{range}</div>
      <input
        type="range"
        min={0}
        max={50000}
        step={1000}
        value={range}
        onChange={rangeChanged}
      />
      <div className="limit-container">
        <label className="min-label">0</label>
        <label className="max-label">50000</label>
      </div>
    </div>
  );
}

export default RangePicker;
