import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import {} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mainDashboard">
      <Header />
      <div className="mainLayout">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
