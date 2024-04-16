"use client";
import Link from "next/link";
import Image from "next/image";
import { montserrat, syne } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FiAlignRight, FiX } from "react-icons/fi";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 100;

      setIsFixed(scrollHeight > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="w-full flex relative flex-col bg-[#000]">
        <div
          className={cn(
            ` ${
              isFixed
                ? " bg-[#000] fixed top-0 z-50 w-full px-[32px] transition-all delay-75"
                : "container transition-all delay-75"
            }`
          )}
        >
          <div className="flex justify-between w-full items-center ">
            <div>
              <Link href="/">
                <Image
                  src="/image/logo.jpg"
                  width={150}
                  height={30}
                  alt="DJ Zaddy"
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex">
              <ul
                className={`${syne.className}  items-center gap-10 uppercase tracking-wide text-white font-[500] hidden md:flex`}
              >
                <li className="hover:text-[--text-hover] transition-all delay-75  border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#home">Home</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#about">About Me</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#events">events</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#services">services</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#discography">playlist</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#gallery">DISCOGRAPHY</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="#contact">contact</Link>
                </li>
              </ul>
              <FiAlignRight
                className="flex md:hidden text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer  text-white hover:text-[--text-hover] transition-all delay-75"
                onClick={handleToggle}
              />
            </div>
          </div>
        </div>
        {toggle && (
          <>
            <div className="flex w-full bg-[--secondary-bg] fixed top-0 z-50 justify-center text-center h-screen items-center">
              <div className="absolute top-[60px] right-8">
                <FiX
                  className="text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer text-white hover:text-[--text-hover] transition-all delay-75"
                  onClick={handleToggle}
                />
              </div>
              <ul
                className={`${montserrat.className}  items-center gap-10 uppercase tracking-wide text-white font-[500]`}
              >
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2  hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#home" onClick={handleToggle}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#about" onClick={handleToggle}>
                    About Me
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#events" onClick={handleToggle}>
                    events
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#services" onClick={handleToggle}>
                    services
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#discography" onClick={handleToggle}>
                    playlist
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#gallery" onClick={handleToggle}>
                    DISCOGRAPHY
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#contact" onClick={handleToggle}>
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
