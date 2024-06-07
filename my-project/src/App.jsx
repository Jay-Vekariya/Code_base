import React from "react";
import Homepage from "./Components/Homepage";
import Features from "./Components/Features";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <div className="min-w-[1080px] max-w-[2000px]">
      <Homepage />
      <Features />
      <AboutUs />
    </div>
  );
};

export default App;
