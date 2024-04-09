import { open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialSpotify } from "react-icons/sl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full h-fit bg-[#000]">
        <div className="w-full mx-auto p-10 md:p-20 flex justify-between gap-8 ">
          <div className="md:w-1/2 mx-auto flex justify-center items-center text-center flex-col">
            <Image
              src="/image/logo.jpg"
              width={300}
              height={50}
              alt="logo"
              className="w-[400px] h-[200px] object-cover"
            />
            <div className="my-5">
              <p
                className={cn(
                  `${open_sans.className} font-[400] text-sm text-[--primary-text-color] leading-[1.7]`
                )}
              >
                The best thing about being a DJ is making people happy. There is
                nothing like seeing people get up from a table to dance or the
                expression on their face when they hear a song they love. I also
                love to educate people on music they have never heard.
              </p>
            </div>
            <div className="flex items-center text-[--primary-text-color] mb-5 gap-2">
              <FiFacebook className="h-[20px] w-[20px]" />
              <FaXTwitter className="h-[20px] w-[20px]" />
              <SlSocialSpotify className="h-[20px] w-[20px]" />
            </div>
            <p
              className={cn(
                `${open_sans.className} font-[400] text-sm text-[--primary-text-color] leading-[1.7]`
              )}
            >
              Copyright &copy; {currentYear} Z-addy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
