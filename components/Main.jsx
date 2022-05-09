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
    <div className=" bg-transparent relative subpixel-antialiased w-full  flex flex-col items-center mt-1">
       <a
        id="mlh-trust-badge"
        className="sticky -mr-[80%]  max-w-[100px] min-w-[60px] w-[10%] top-[84px] sm:top-0 z-[100]"
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
      <Element name="home" className="w-full flex-col flex items-center -mt-[100px] sm:-mt-[20%] lg:-mt-[10%]">
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
