import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { MainDashboard, MainLayout } from "./style";

const Dashboard = () => {
  return (
    <MainDashboard>
      <Header />
      <MainLayout>
        <Sidebar />
        <MainContent />
      </MainLayout>

      <Footer />
    </MainDashboard>
  );
};

export default Dashboard;
