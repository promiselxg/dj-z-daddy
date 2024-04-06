"use client";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
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

  return (
    <>
      <div className="w-full flex relative">
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
                  <Link href="#gallery">gallery</Link>
                </li>
                <li className="hover:text-[--text-hover] transition-all delay-75 border-b-[1px]  border-b-transparent pb-2 hover:border-b-[--text-hover]">
                  <Link href="/home">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
