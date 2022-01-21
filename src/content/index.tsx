import { Routes, Route } from "react-router-dom";

import About from "./About";
import Background from "./Background";
import Character from "./Character";
import VisualDev from "./VisualDev";

function Index() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/background" element={<Background />} />
        <Route path="/visualDev" element={<VisualDev />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Index;
