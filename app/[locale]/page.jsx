"use client";

import { barlow, syne } from "@/lib/fonts";
import Image from "next/image";
import { ServicesCard } from "./_components/Card";
import Music from "./_components/Music";
import Discography from "./_components/Discography";
import Events from "./_components/Events";
import { Spotify } from "react-spotify-embed";
import { cn } from "@/lib/utils";
import Hero from "./_components/Hero";
import { useTranslations } from "next-intl";
import Gallery from "./_components/Gallery";
import useFetch from "@/hooks/useFetch";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const t = useTranslations();
  const { data: bioData, loading: bioLoading } = useFetch("/bio?q=bio");
  const { data: bioImg, loading: bioImgLoading } = useFetch("/bio?q=bioImg");
  const { data: playListImg, loading: playListLoading } =
    useFetch("/bio?q=playlistImg");
  return (
    <>
      <Hero />
      <section
        id="about"
        className="md:h-screen bg-[--primary-bg] flex items-center"
      >
        <div className="w-full md:w-[90%] mx-auto p-10 md:p-20 flex justify-between gap-8 items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1
              className={`${syne.className} font-[300] text-[30px] md:text-[40px] leading-[1.1] text-white`}
            >
              <span className="text-white uppercase">
                {t("HomePage.title-about")}
              </span>{" "}
              <span className="text-[#e97688]  uppercase">
                {t("HomePage.title-dj")}
              </span>
            </h1>

            <p
              className={cn(
                `${barlow.className} py-3 text-[--primary-text-color] text-justify	text-sm leading-[1.7]`
              )}
            >
              {bioLoading ? (
                <>
                  <div className="flex flex-col gap-y-2">
                    <Skeleton className="w-full h-[10px] rounded-full bg-[--secondary-bg]" />
                    <Skeleton className="w-1/2 h-[10px] rounded-full bg-[--secondary-bg]" />
                    <Skeleton className="w-2/12 h-[10px] rounded-full bg-[--secondary-bg]" />
                  </div>
                </>
              ) : (
                bioData[0]?.bioInfo
              )}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center">
            {bioImgLoading ? (
              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[10px] rounded-full bg-[--secondary-bg]" />
                <Skeleton className="w-1/2 h-[10px] rounded-full bg-[--secondary-bg]" />
                <Skeleton className="w-2/12 h-[10px] rounded-full bg-[--secondary-bg]" />
              </div>
            ) : (
              <Image
                src={bioImg[0]?.mediaUrl}
                width={500}
                height={400}
                alt="girl"
                className="w-[350px] h-[400px] object-cover"
              />
            )}
          </div>
        </div>
      </section>
      <section id="events" className="bg-[--secondary-bg] flex-col">
        <div className="w-full md:w-[90%] mx-auto p-10 md:p-20 flex justify-between gap-8 items-center  flex-col">
          <div className="w-full flex justify-between items-center flex-col md:flex-row">
            <div className="flex items-center w-full md:w-1/2 gap-6 mb-10 md:mb-0">
              <span className="w-[20%] md:w-1/2 border border-[--primary-text-color] "></span>
              <div className="flex w-full">
                <h1
                  className={`${barlow.className} flex gap-2 font-[300] text-[20px] md:text-[40px] leading-[1.1] text-white capitalize`}
                >
                  <span className="text-white">
                    {t("HomePage.Events.title-one")}{" "}
                  </span>{" "}
                  <span className="text-[#e97688]">
                    {t("HomePage.Events.title-two")}
                  </span>
                </h1>
              </div>
            </div>
            {/* <div className="my-5 hidden md:flex">
              <Link
                href="/"
                className="border border-[--primary-text-color] py-4 px-12 capitalize text-white hover:text-[#e97688] transition-all delay-75 hover:border-[#e97688]"
              >
                {t("HomePage.Events.button-text")}
              </Link>
            </div> */}
          </div>
          <div className="w-full flex">
            <div className="w-full gap-6 grid md:grid-cols-3 grid-cols-1">
              <Events />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-[--primary-bg]">
        <div className="w-full mx-auto p-10 md:p-20 flex justify-between gap-8 ">
          <div className="w-full flex justify-between items-center flex-col md:flex-row">
            <div className="flex items-center w-full md:w-[40%] gap-6">
              <span className="w-[20%] md:w-[20%] border border-[--primary-text-color] "></span>
              <div className="flex w-[80%] md:w-full">
                <h1
                  className={`${barlow.className} font-[300] text-[30px] md:text-[40px] leading-[1.1] text-white `}
                >
                  <span className="text-white uppercase">
                    {t("HomePage.Services.title")}{" "}
                  </span>{" "}
                  <span className="text-[#e97688] uppercase">
                    {t("HomePage.Services.title-two")}
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-full md:w-[60%] my-10">
              <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
                <ServicesCard
                  img="/image/wedding.jpg"
                  label={t("HomePage.Services.wedding")}
                />
                <ServicesCard
                  img="/image/club.jpg"
                  label={t("HomePage.Services.clubs-n-bars")}
                />
                <ServicesCard
                  img="/image/corporate.jpg"
                  label={t("HomePage.Services.coperate-events")}
                />
                <ServicesCard
                  img="/image/playlist.jpg"
                  label={t("HomePage.Services.playlist-creation")}
                />
                <ServicesCard
                  img="/image/lesson.jpg"
                  label={t("HomePage.Services.dj-lesson")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {!playListLoading && (
        <section
          id="discography"
          className={cn(
            `bg-[--secondary-bg] w-full bg-center ] bg-cover md:h-[500px]`
          )}
          style={{ backgroundImage: `url('${playListImg[0]?.mediaUrl}')` }}
        >
          <div className="w-full mx-auto p-5 md:p-20 flex justify-between gap-8 ">
            <div className="w-full flex justify-between flex-col md:flex-row">
              <div className="flex  w-full md:w-1/2 gap-6 flex-col">
                <div className="flex w-[80%] md:w-full items-center gap-5">
                  <div className="w-[20%] md:w-[20%] border border-[--primary-text-color]"></div>
                  <div className="w-full">
                    <h1
                      className={`${barlow.className} font-[300] text-[30px] md:text-[40px] leading-[1.1] text-white `}
                    >
                      <span className="text-white uppercase">
                        {t("HomePage.MyPlaylist.title")}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="w-full gap-y-3 flex flex-col mt-5">
                  <Music />
                </div>
              </div>
              <div className="md:w-[40%] md:flex md:justify-center md:text-center mt-5 md:mt-0">
                {/* <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" /> */}
                {/* <Spotify link="https://open.spotify.com/playlist/03nIsS47JClNdcpyZSG0V5?si=926a0647fc774a41" /> */}
                <Spotify link="https://open.spotify.com/playlist/0Rqe3ho6Mvgl8Mdf2mWOtg?si=0ce9353db46845ad" />
              </div>
            </div>
          </div>
        </section>
      )}
      <section
        id="gallery"
        className="md:h-fit w-full md:w-full  text-white p-10 bg-[--primary-bg]"
      >
        <div className="flex w-[80%] md:w-full items-center gap-5">
          <div className="w-[20%] md:w-[20%] border border-[--primary-text-color]"></div>
          <div className="w-full">
            <h1
              className={`${barlow.className} font-[300] text-[30px] md:text-[40px] leading-[1.1] text-white `}
            >
              <span className="text-white uppercase">
                {t("HomePage.Discography.title")}
              </span>
            </h1>
          </div>
        </div>
        <div className="my-10">
          <Gallery />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <Discography />
          </div>
        </div>
      </section>
    </>
  );
}
