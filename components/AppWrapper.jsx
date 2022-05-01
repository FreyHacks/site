import React from "react";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";

const AppWrapper = () => {
  return (
    <div
      id="contain"
      className="w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden overflow-y-scroll "
    >
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "25px",
          top: "0",
          width: "10%",
          zIndex: "10000",
        }}
        rel="noopener noreferrer"
        href="https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=yellow"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-yellow.svg"
          alt="Major League Hacking 2022 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>
      <Nav />
      <Main />
    </div>
  );
};

export default AppWrapper;
