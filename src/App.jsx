
import { Routes, Route } from "react-router-dom";
import { Random } from "./pages/random";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<Random/>} />
    </Routes>
  );
};

export default App;
