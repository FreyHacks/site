import data from "../lib/register";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import LogoSvg from "../public/svg/logo.svg";

const Nav = ({ external }) => {
  const [open, setopen] = useState(false);
  const router = useRouter();
  const handle = (a) => {
    if (external) {
      router.push(`/#${a}`);
    } else {
      scroller.scrollTo(a, {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: "contain",
      });
      setopen(false);
    }
  };

  const links = [
    { name: "Home", onClick: () => handle("home") },
    { name: "About", onClick: () => handle("about") },
    { name: "Schedule", onClick: () => handle("scheduled") },
    {
      name: (
        <a
          href={data.link}
          className=" bg-gradient-to-b from-[#5BA558] hover:from-[#83C280] hover:to-[#5BA558] to-[#83C280] focus:ring-2 focus:ring-[#83C280]  text-medium font-medium  text-white rounded py-2 px-4 lg:px-7"
        >
          Register
        </a>
      ),
      onClick: undefined,
    },
  ];

  return (
    <nav className="flex space-x-4 w-[100vw] z-[999] relative sticky top-0 items-center bg-white py-3 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20 min-h-12">
      <Image alt="FreyHacks" src={LogoSvg} className="max-w-20 max-h-12" />
        <div
          className="md:hidden w-5 h-8 flex flex-col justify-evenly"
          onClick={() => setopen(!open)}
        >
          <span className="w-5 h-1 bg-black"></span>
          <span className="w-5 h-1 bg-black"></span>
          <span className="w-5 h-1 bg-black"></span>
        </div>
      <div
        className={`navigation md:flex items-center lg:text-xl xl:text-2xl m-0 space-x-8 ${
          open ? "open" : ""
        }`}
      >
        {links.map((link) => (
          <a key={link.name} onClick={link.onClick} className="cursor-pointer">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
