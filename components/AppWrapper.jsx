import React from "react";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";

const AppWrapper = () => {
  return (
    <div
      id="contain"
      className="w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden  "
    >
      <Nav />
      <Main />
    </div>
  );
};

export default AppWrapper;
