import { barlow, montserrat, open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Card = ({ day, date, title, description }) => {
  return (
    <>
      <div className="py-10 w-full flex gap-4">
        <div>
          <h1
            className={cn(
              `${montserrat.className} text-[--text-brown] text-[60px] font-[700]`
            )}
          >
            {day}
          </h1>
        </div>
        <div>
          <h2 className="uppercase text-[#9596ab]">{date}</h2>
          <h1
            className={cn(
              `${barlow.className} font-[300] text-white text-[26px] leading-[1.5] uppercase`
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              `${open_sans.className} font-[300] text-sm leading-[1.5] text-[#9596ab] my-5`
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

const ServicesCard = ({ img, label }) => {
  return (
    <>
      <div className="flex justify-center text-center flex-col">
        <div className="h-fit md:h-[150px] bg-[#e97688]">
          <Image
            src={img}
            width={150}
            height={50}
            alt="wedding"
            className="w-full"
          />
        </div>
        <div className="h-fit md:h-[100px]">
          <h1
            className={cn(
              `${barlow.className} font-[300] text-white uppercase leading-[1.4] text-[20px] py-2 tracking-wide`
            )}
          >
            {label}
          </h1>
        </div>
      </div>
    </>
  );
};
export { Card, ServicesCard };
