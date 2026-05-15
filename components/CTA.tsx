import { MoveUpRight } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dmsans = DM_Sans({});

function CTA() {
  return (
    <div className="h-186 max-w-screen bg-[#1E2A2E] flex flex-col items-center justify-center">
      <div className="flex justify-evenly w-full font-clash text-white">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-6xl">5+</h1>
          <p className="font-medium text-2xl text-center mt-2">countries served</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-6xl">5.0</h1>
          <p className="font-medium text-2xl mt-2 text-center">Google Rating</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-6xl">50+</h1>
          <p className="font-medium text-2xl mt-2 text-center">Project Delivered</p>
        </div>
      </div>
      <div className="mt-36 relative">
        <Image
          src="/CTA.svg"
          width={1170}
          height={284}
          alt="cta"
          className="w-auto h-auto"
        />
        <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:gap-12 justify-between px-3 md:p-12">
          <h1 className=" text-3xl md:text-5xl text-white font-clash font-medium">
            Ready to turn your vision into Reality
          </h1>
          <button
            className={`${dmsans.className} text-white  hover:scale-110  transition-all hover:cursor-pointer font-bold h-max py-3 w-1/4 rounded-4xl bg-linear-to-br from-[#2A77F3] to-[#2BC2EF]`}
          >
            Get a Free Consultation
          </button>
        </div>
        <button className="border absolute rounded-4xl flex items-center justify-center py-1 md:py-4 -top-8 w-1/6 left-1/8 hover:scale-110  transition-all hover:cursor-pointer border-[#F3F4F68A]">
          <svg className="w-0 h-0 absolute">
            <linearGradient
              id="icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2A77F3" />
              <stop offset="100%" stopColor="#2BC2EF" />
            </linearGradient>
          </svg>
          <MoveUpRight className="stroke-[url(#icon-gradient)] h-10 w-10" />
        </button>
      </div>
      <div className="md:w-7xl"></div>
    </div>
  );
}

export default CTA;
