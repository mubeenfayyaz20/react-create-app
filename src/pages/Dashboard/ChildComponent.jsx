import React from "react";

const ChildComponent = ({ heading, button, onMouseHover }) => {
  return (
    <div
      className="childComponent"
      style={{ border: "1px solid red", padding: "10px", borderRadius: "10px" }}
    >
      <h2>{heading}</h2>
      <button
        onClick={() => button(heading)}
        onMouseEnter={() => onMouseHover(heading)}
      >
        {heading}
      </button>
    </div>
  );
};

export default ChildComponent;
