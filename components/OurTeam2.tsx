import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({});

function OurTeam2() {
  return (
    <div className="aspect-1440/626">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-clash text-5xl font-semibold">Our Team</h1>
        <p className="font-['Arial'] text-[#0000008A] mt-4 max-w-1/3 text-center text-xl">
          Our team consists of designers, developers, engineers, and product
          specialists who bring deep technical expertise and problem-solving
          ability.
        </p>
        <div className="mt-16">
          <Image
            src={"/Team2.svg"}
            alt="team"
            width={424}
            height={140}
            className="w-auto h-auto"
          />
        </div>
        <div className={`${outfit.className} max-w-7xl w-full justify-center flex gap-8`}>
          <div className="flex flex-col p-4 rounded-xl border border-[#DCDCDC] pr-12">
            <div></div>
            <h1 className="text-3xl font-semibold mt-12 ">2024</h1>
            <p className="text-[#00000066]">Year Established</p>
          </div>
          <div className="flex flex-col p-4 rounded-xl border border-[#DCDCDC] pr-12">
            <div></div>
            <h1 className="text-3xl font-semibold mt-12">
              $1M<span className="inline-block text-[#4EA62F]">+</span>
            </h1>
            <p className="text-[#00000066]">Revenue generated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam2;
