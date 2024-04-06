import Link from "next/link";
import Image from "next/image";
import { barlow } from "@/lib/fonts";
const Hero = () => {
  return (
    <>
      <div className="w-[90%] mx-auto p-20 flex justify-between gap-8 items-center">
        <div className="w-1/2">
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
            He caught the attention of audiences the world over with his perfect
            performance. American DJ and songwriter Ally`s brilliant performance
            have amazed millions of people all over the world. But with 3
            million record sales and a growing popularity, she stays open to his
            fans and often organizes public meetings.
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
        <div className="w-1/2 h-full flex justify-center">
          <Image src="/image/dj.jpg" width={500} height={400} alt="girl" />
        </div>
      </div>
    </>
  );
};

export default Hero;
