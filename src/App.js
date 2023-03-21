import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Destinations from "./routes/destinations/destinations";
import "./App.css";

// import { Suspense } from "react";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>

  );
};

export default App;
