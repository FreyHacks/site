import React from "react";
import Footer from "./Footer";
import Info from "./Info";
import Events from "./Events";
import Sponsors from "./Sponsors";
import Faq from "./Faq";
import Hero from "./Hero";
import { Element } from "react-scroll";

const Main = () => {
  return (
    <div className=" bg-transparent subpixel-antialiased h-full w-full mt-14 sm:mt-0 flex flex-col items-center pt-0 sm:pt-10">
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          top: "84px",
          width: "10%",
          zIndex: "10000",
        }}
        className="right-[30px] md:right-[65px]"
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
      <Element name="home" className="w-full flex-col flex items-center">
        <Hero />
      </Element>
      <Element name="about" className="w-full flex-col flex items-center">
        <Info />
      </Element>
      <Element name="events" className="w-full flex-col flex items-center">
        {" "}
        <Events />
      </Element>
      <Element name="sponsors" className="w-full flex-col flex items-center">
        {" "}
        <Sponsors />
      </Element>
      <Faq />
      <Footer external={false} />
    </div>
  );
};

export default Main;
