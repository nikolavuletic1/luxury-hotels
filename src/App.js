import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import "./App.css";


const App = () => {
  return (
    // <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  //  </ScrollToTop>
  );
};

export default App;
