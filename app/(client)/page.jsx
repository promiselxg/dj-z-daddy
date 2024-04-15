import Header from "./_components/Header";
import { barlow } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { ServicesCard } from "./_components/Card";
import Music from "./_components/Music";
import { SlSocialSpotify } from "react-icons/sl";
import { cn } from "@/lib/utils";
import Discography from "./_components/Discography";
import Events from "./_components/Events";

export default function Home() {
  return (
    <>
      <section
        className="w-full h-screen bg-hero-bg bg-top-right bg-no-repeat bg-cover text-[--primary-text-color]"
        id="home"
      >
        <Header />
      </section>
      <section
        id="about"
        className="md:h-screen bg-[--primary-bg] flex items-center"
      >
        <div className="w-full md:w-[90%] mx-auto p-10 md:p-20 flex justify-between gap-8 items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1
              className={`${barlow.className} font-[300] text-[40px] leading-[1.1] text-white`}
            >
              <span className="text-white">ABOUT</span>{" "}
              <span className="text-[#e97688]">DJ ZADDY</span>
            </h1>
            <h2 className="text_system py-5">
              Ally is an American rapper, producer and DJ best known for being a
              member of A Tribe Called Quest.
            </h2>
            <p className="text_normal pb-6">
              He caught the attention of audiences the world over with his
              perfect performance. American DJ and songwriter Ally`s brilliant
              performance have amazed millions of people all over the world. But
              with 3 million record sales and a growing popularity, she stays
              open to his fans and often organizes public meetings.
            </p>
            <div className="my-5">
              <Link
                href="/"
                className="border border-[--primary-text-color] py-4 px-12 uppercase text-white hover:text-[#e97688] transition-all delay-75 hover:border-[#e97688]"
              >
                About me
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center">
            <Image src="/image/dj.jpg" width={500} height={400} alt="girl" />
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
                  className={`${barlow.className} flex gap-2 font-[300] text-[20px] md:text-[40px] leading-[1.1] text-white`}
                >
                  <span className="text-white">UPCOMING </span>{" "}
                  <span className="text-[#e97688]">EVENTS</span>
                </h1>
              </div>
            </div>
            <div className="my-5">
              <Link
                href="/"
                className="border border-[--primary-text-color] py-4 px-12 uppercase text-white hover:text-[#e97688] transition-all delay-75 hover:border-[#e97688]"
              >
                view all events
              </Link>
            </div>
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
                  <span className="text-white uppercase">Where </span>{" "}
                  <span className="text-[#e97688] uppercase">I play</span>
                </h1>
              </div>
            </div>
            <div className="w-full md:w-[60%] my-10">
              <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
                <ServicesCard img="/image/wedding.jpg" label="wedding" />
                <ServicesCard img="/image/club.jpg" label="clubs &amp; bars" />
                <ServicesCard
                  img="/image/corporate.jpg"
                  label="corporate events"
                />
                <ServicesCard
                  img="/image/playlist.jpg"
                  label="playlist creation"
                />
                <ServicesCard img="/image/lesson.jpg" label="dj lessons" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="discography"
        className="w-full bg-playlist-lady-bg bg-center bg-no-repeat bg-cover md:h-[500px]"
      >
        <div className="w-full mx-auto p-5 md:p-20 flex justify-between gap-8 ">
          <div className="w-full flex justify-between items-center flex-col md:flex-row">
            <div className="flex  w-full md:w-1/2 gap-6 flex-col">
              <div className="flex w-[80%] md:w-full items-center gap-5">
                <div className="w-[20%] md:w-[20%] border border-[--primary-text-color]"></div>
                <div className="w-full">
                  <h1
                    className={`${barlow.className} font-[300] text-[30px] md:text-[40px] leading-[1.1] text-white `}
                  >
                    <span className="text-white uppercase">My Playlist</span>
                  </h1>
                </div>
              </div>
              <div className="w-full gap-y-3 flex flex-col mt-5">
                <Music />
              </div>
              <div className="flex items-center text-[--primary-text-color] mb-5 gap-2">
                <h1 className={cn(`${barlow.className} font-[600] `)}>
                  Spotify Music{" "}
                </h1>
                <SlSocialSpotify className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <span className="text-white uppercase">Discography</span>
            </h1>
          </div>
        </div>
        <div className="my-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <Discography />
          </div>
        </div>
      </section>
    </>
  );
}
