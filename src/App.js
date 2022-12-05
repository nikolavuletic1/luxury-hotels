import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import "./App.css";



const App = () => {
  return (

      <Routes>
        <Route path="/luxury-hotels" element={<Home />} />
      </Routes>

  );
};

export default App;
