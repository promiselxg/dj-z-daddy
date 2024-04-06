import { barlow, montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <div className="w-[90%] mx-auto p-20 flex justify-between gap-8 items-center  flex-col">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center w-1/2 gap-6">
            <span className="w-1/2 border border-[--primary-text-color] "></span>
            <div className="flex w-full">
              <h1
                className={`${barlow.className} font-[300] text-[40px] leading-[1.1] text-white`}
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
          <div className="w-full gap-6 grid grid-cols-3">
            <div className="py-10 w-full flex gap-4">
              <div>
                <h1 className={cn(`${montserrat.className} --text-brown`)}>
                  04
                </h1>
              </div>
              <div>
                <h2>April, 2024</h2>
                <h1>Found festival 2024</h1>
                <p>
                  The event has been turning the park into a sun-kissed musical
                  paradise for the past three years.
                </p>
              </div>
            </div>
            <div className="p-10 w-full bg-[#438b43]">deede</div>
            <div className="p-10 w-full bg-[brown]">s</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
