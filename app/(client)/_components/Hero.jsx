"use client";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";

const Hero = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`/api/media?query=banner`);
      setData(response?.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full relative bg-[--secondary-bg]" id="home">
        <Header />
        <div className="md:h-screen h-[300px]">
          {data && (
            <Carousel
              autoPlay
              infiniteLoop={true}
              transitionTime={500}
              showStatus={false}
              interval={5000}
              emulateTouch
              dynamicHeight={true}
              showThumbs={false}
            >
              {data &&
                data?.map((slider) => {
                  return (
                    <div className="relative" key={slider?.id}>
                      <Image
                        src={slider?.mediaUrl}
                        width={1500}
                        height={700}
                        className="h-[300px] md:h-screen w-full object-fit"
                        alt="image"
                      />
                      {slider?.description && (
                        <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                          <h1
                            className={cn(
                              `${montserrat.className} text-sm md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase`
                            )}
                          >
                            {slider?.description}
                          </h1>
                        </div>
                      )}
                    </div>
                  );
                })}
            </Carousel>
          )}
          {isLoading && (
            <div className="relative">
              <Image
                src="/image/guy.jpg"
                width={1500}
                height={500}
                className="h-[300px] md:h-screen w-full object-fit"
                alt="image"
                priority
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                <h1
                  className={cn(
                    `${montserrat.className} text-sm md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase`
                  )}
                ></h1>
              </div>
            </div>
          )}
          {(data && !Array.isArray(data)) ||
            (data?.length === 0 && (
              <div className="relative">
                <Image
                  src="/image/guy.jpg"
                  width={1500}
                  height={500}
                  className="h-[300px] md:h-screen w-full object-fit"
                  alt="image"
                  priority
                />
                <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] bg-[rgba(0,0,0,0.5)] md:p-10 p-5 absolute md:top-[200px] top-[60px]">
                  <h1
                    className={cn(
                      `${montserrat.className} text-sm md:text-3xl font-extrabold text-[#fff] z-10 leading-tight mb-4 justify-start text-left uppercase`
                    )}
                  ></h1>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
