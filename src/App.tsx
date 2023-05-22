import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleEvent from "./pages/SingleEvent";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="events/:id" element={ <SingleEvent  />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>

  );
}

export default App;
