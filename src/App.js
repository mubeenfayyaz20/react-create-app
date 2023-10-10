import { useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.pathname = "/add-new-events";
    }
  }, []);
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
