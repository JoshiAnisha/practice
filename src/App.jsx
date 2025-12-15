
import { Routes, Route } from "react-router-dom";
import { Random } from "./pages/random";
import {View} from "./pages/view";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<Random/>} />
      <Route path="/view" element={<View/>} />
    </Routes>
  );
};

export default App;
