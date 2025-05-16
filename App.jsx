import React from "react";
import WheelRepair from "./WheelRepair";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wheel-repair" element={<WheelRepair />} />
        <Route path="/" element={<div className='text-white text-center p-10'>Welcome to Concept Motorsports</div>} />
      </Routes>
    </Router>
  );
}

export default App;