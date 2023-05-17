import React from "react"
import "./App.scss";
import Navbar from "./components/Navbar";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Course />
    </div>
  );
}

export default App;
