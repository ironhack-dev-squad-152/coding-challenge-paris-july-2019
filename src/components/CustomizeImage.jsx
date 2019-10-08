import React, { useState } from "react";

export default function CustomizeImage() {
  const [state, setState] = useState({
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w",
    size: 100
  });
  function handleTextInputChange(e) {
    setState({
      ...state,
      url: e.target.value
    });
  }
  function handleRangeInputChange(e) {
    setState({
      ...state,
      size: Number(e.target.value)
    });
  }
  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={state.url} onChange={handleTextInputChange} />
      <br />
      <input
        type="range"
        min="0"
        max="200"
        value={state.size}
        onChange={handleRangeInputChange}
      />
      <br/>
      <div>{state.size} x {state.size}px</div>
      <br/>
      {state.url && (
        <img
          src={state.url}
          alt=""
          style={{ height: state.size, width: state.size }}
        />
      )}
    </div>
  );
}
