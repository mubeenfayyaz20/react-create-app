import React from "react";
import AddNewEvents from "../EventManagement/AddNewEvents";
import AllEvents from "../EventManagement/AllEvents";
import UpdateEvent from "../EventManagement/UpdateEvent";
import { Routes, Route } from "react-router-dom";
import CardEvents from "./CardEvents";
import EventCalender from "../EventManagement/EventCalender";

const MainContent = () => {
  return (
    <main className="mainContent">
      <Routes>
        <Route path="/add-new-events" element={<AddNewEvents />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/update-event/:id" element={<UpdateEvent />} />
        <Route path="/test" element={<CardEvents />} />
        <Route path="/events-calender" element={<EventCalender />} />
      </Routes>
    </main>
  );
};

export default MainContent;
