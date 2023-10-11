import React from "react";
import DashboardCard from "./DashboardCard";

const CardEvents = () => {
  const pageOnLoad = () => {
    return {
      sectionA: "Section A",
      sectionB: "Section B",
    };
  };
  const { sectionA, sectionB } = pageOnLoad();

  const onbuttonClick = (section) => {
    if (section === "Section A") {
      alert("Section A");
    } else {
      alert("Section B");
    }
  };

  const mouseHover = (section) => {
    if (section === "Section A") {
      console.log("section A");
    } else {
      console.log("Section B");
    }
  };

  return (
    <div className="cardEvents">
      <div>
        <DashboardCard
          heading={sectionA}
          button={onbuttonClick}
          onMouseHover={mouseHover}
        />
      </div>
      <div>
        <DashboardCard
          heading={sectionB}
          button={onbuttonClick}
          onMouseHover={mouseHover}
        />
      </div>
    </div>
  );
};

export default CardEvents;
