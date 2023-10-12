import React from "react";

const DashboardCard = ({ heading, button, onMouseHover }) => {
  return (
    <div className="dashboardCard">
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

export default DashboardCard;
