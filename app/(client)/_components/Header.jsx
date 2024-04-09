"use client";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FiAlignRight, FiX } from "react-icons/fi";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [toggle, setToggle] = useState(true);
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

  const hanldeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="w-full flex relative flex-col">
        <div
          className={cn(
            ` ${
              isFixed
                ? " bg-[#000] fixed top-0 z-50 w-full px-[30px]"
                : "container my-10"
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
                />
              </Link>
            </div>
            <div className="flex">
              <ul
                className={`${montserrat.className}  items-center gap-10 uppercase tracking-wide text-white font-[500] hidden md:flex`}
              >
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] pb-2 active hover:border-b-[--text-hover]">
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
                  <Link href="#gallery">gallery</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="/home">contact</Link>
                </li>
              </ul>
              <FiAlignRight
                className="flex md:hidden text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer"
                onClick={hanldeToggle}
              />
            </div>
          </div>
        </div>
        {toggle && (
          <>
            <div className="flex w-full bg-[--secondary-bg] fixed top-0 z-50 justify-center text-center h-screen items-center">
              <div className="absolute top-5 right-8">
                <FiX
                  className="text-[40px] bg-[--primary-bg] rounded-[5px] p-2 cursor-pointer"
                  onClick={hanldeToggle}
                />
              </div>
              <ul
                className={`${montserrat.className}  items-center gap-10 uppercase tracking-wide text-white font-[500]`}
              >
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] pb-2 active hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#home" onClick={hanldeToggle}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#about" onClick={hanldeToggle}>
                    About Me
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#events" onClick={hanldeToggle}>
                    events
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#services" onClick={hanldeToggle}>
                    services
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#discography" onClick={hanldeToggle}>
                    playlist
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px] border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="#gallery" onClick={hanldeToggle}>
                    gallery
                  </Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover] my-2 text-[25px]">
                  <Link href="/home" onClick={hanldeToggle}>
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
