import React, { useState } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState("");
  function handleChange(event) {
    setTemperature(event.target.value);
  }
  function renderVerdict() {
    let text;
    let textColor;
    if (temperature === "") {
      return ""
    }
    else if (temperature < 10) {
      text = "It's cold ❄️";
      textColor = "blue";
    }
    else if (temperature < 30) {
      text = "It's nice 🌼";
      textColor = "black";
    }
    else {
      text = "It's warm ☀️";
      textColor = "red";
    }
    return <div style={{ color: textColor }}>{text}</div>;
  }
  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" value={temperature} onChange={handleChange} />
      {renderVerdict()}
    </div>
  );
}
