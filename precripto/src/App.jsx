import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      {/* Navigation */}


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
