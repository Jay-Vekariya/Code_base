import React from "react";
import Homepage from "./Components/Homepage";
import Features from "./Components/Features";
import AboutUs from "./Components/AboutUs";
// max-w-[2000px]
const App = () => {
  return (
    <div className="min-w-[1023px] min-h-[1000px]">
      <Homepage />
      <Features />
      <AboutUs />
    </div>
  );
};

export default App;
