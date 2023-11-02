import React from "react";

import { DashboardCardWrapper } from "./style";
const DashboardCard = ({ heading, button, onMouseHover }) => {
  return (
    <DashboardCardWrapper>
      <h2>{heading}</h2>
      <button
        onClick={() => button(heading)}
        onMouseEnter={() => onMouseHover(heading)}
      >
        {heading}
      </button>
    </DashboardCardWrapper>
  );
};

export default DashboardCard;
