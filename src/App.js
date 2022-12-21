import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Destinations from "./routes/destinations/destinations";
import "./App.css";


const App = () => {
  return (
    // <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
  //  </ScrollToTop>
  );
};

export default App;
