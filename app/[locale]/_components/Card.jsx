import { barlow, montserrat, open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Card = ({ day, date, title, description, mediaUrl }) => {
  return (
    <>
      <div className="py-5 w-full flex gap-4 flex-col md:flex-row">
        <div className="hidden md:flex">
          <h1
            className={cn(
              `${montserrat.className} text-[--text-brown] text-[60px] font-[700]`
            )}
          >
            {day}
          </h1>
        </div>
        <div>
          <h2 className="uppercase text-[#9596ab] flex gap-1">
            <span className="md:hidden text-[--text-brown] font-[700]">
              {day}
            </span>
            {date}
          </h2>
          <h1
            className={cn(
              `${barlow.className} font-[300] text-white text-[26px] capitalize leading-tight`
            )}
          >
            {title}
          </h1>
          <Image
            src={mediaUrl}
            width={500}
            height={200}
            alt="wedding"
            className="w-full h-[300px] object-fill my-2"
          />
          <p
            className={cn(
              `${open_sans.className} font-[300] text-sm leading-[1.5] text-[#9596ab] my-5 text-wrap text-justify`
            )}
          >
            {description}
          </p>
          <Dialog>
            <DialogTrigger className="w-full justify-start flex text-left items-start">
              <Button className="bg-transparent border border-[--primary-text-color] py-4 px-12 capitalize text-white hover:text-[#e97688] transition-all delay-75 hover:border-[#e97688] w-full md:w-fit">
                View Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="uppercase flex text-left">
                  {title}
                </DialogTitle>
                <p className="flex items-center gap-1 font-[600] uppercase">
                  <span>{day}</span>
                  {date}
                </p>
                <div>
                  <Image
                    src={mediaUrl}
                    width={500}
                    height={200}
                    alt="wedding"
                    className="w-full h-[350px] object-fill my-2"
                  />
                </div>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
        <div className="h-fit md:h-[100px] text-balance flex-wrap overflow-hidden">
          <h1
            className={cn(
              `${barlow.className} font-[300] text-white capitalize leading-[1.4] text-[20px] py-2 tracking-wide text-balance `
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
