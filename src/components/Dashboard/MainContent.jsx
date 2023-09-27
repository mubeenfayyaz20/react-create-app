import React from "react";
import AddNewEvents from "../EventManagement/AddNewEvents";
import AllEvents from "../EventManagement/AllEvents";
import { Routes, Route } from "react-router-dom";
const MainContent = () => {
  return (
    <main className="mainContent">
      <Routes>
        <Route path="/add-new-events" element={<AddNewEvents />} />
        <Route path="/all-events" element={<AllEvents />} />
      </Routes>
    </main>
  );
};

export default MainContent;
