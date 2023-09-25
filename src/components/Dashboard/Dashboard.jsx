import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="mainDashboard">
      <Header></Header>
      <div className="mainLayout">
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
