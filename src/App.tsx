import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />  {/* Navbar stays at the top */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
