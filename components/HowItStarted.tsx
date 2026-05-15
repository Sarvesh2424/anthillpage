import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({});

function HowItStarted() {
  return (
    <div className="h-506.5 max-w-screen relative bg-[#1E2A2E] p-16">
      <div>
        <h1 className="font-clash font-semibold text-4xl md:text-5xl text-white mt-16">
          How It All Started
        </h1>
        <p className="font-['Arial'] text-white mt-6 text-xl">
          From vision to execution
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center mt-12">
        <div className="relative md:w-1/2 flex flex-col items-center gap-1">
          <div className="bg-[#FFFFFF33] w-11 h-11 rounded-full border border-[#D9D9D9]"></div>
          <div className="h-86 bg-linear-to-r w-2 from-[#712FFF] via-[#4648FF] to-[#6CEFEF] rounded-full"></div>
          <div className="absolute flex md:w-2/3 flex-col -right-16 md:left-1/4 translate-x-1/2   ">
            <h1 className="font-clash text-white text-3xl font-semibold">
              Our Mission
            </h1>
            <p className={`${inter.className} text-white mt-8`}>
              To empower founders and businesses by building reliable, scalable
              digital products that solve real-world problems.
            </p>
          </div>
        </div>
        <div className="relative  md:w-1/2 flex flex-col items-center gap-1">
          <div className="bg-[#FFFFFF33] w-11 h-11 rounded-full border border-[#D9D9D9]"></div>
          <div className="h-86 bg-linear-to-r w-2 from-[#712FFF] via-[#4648FF] to-[#6CEFEF] rounded-full"></div>
          <div className="absolute md:w-2/3 flex flex-col -top-26 -right-5 md:right-1/4 -translate-x-1/2">
            <div className="flex flex-col gap-4 items-end">
               <Image
                src={"/ANT1.svg"}
                alt="ant"
                width={228}
                height={127}
                className="w-auto max-w-40 h-auto"
              />
              <h1 className="font-clash text-white text-3xl font-semibold">
                Our Vision
              </h1>
            </div>
            <p className={`${inter.className} text-white text-end mt-8`}>
              To become a long-term technology partner for innovative companies,
              enabling them to grow and lead in a digital-first world.
            </p>
          </div>
        </div>
        <div className="relative md:w-1/2 flex flex-col items-center gap-1">
          <div className="bg-[#FFFFFF33] w-11 h-11 rounded-full border border-[#D9D9D9]"></div>
          <div className="h-86 bg-linear-to-r w-2 from-[#712FFF] via-[#4648FF] to-[#6CEFEF] rounded-full"></div>
          <div className="absolute md:w-2/3 flex flex-col -top-20 -right-15 md:left-1/4 translate-x-1/2">
            <div className="flex items-center gap-4">
              <h1 className="font-clash text-white text-3xl font-semibold">
                The Gap
              </h1>
              <Image
                src={"/ANT2.svg"}
                alt="ant"
                width={198}
                height={198}
                className="w-auto h-auto"
              />
            </div>

            <p className={`${inter.className} text-white -mt-2`}>
              We saw a gap between great ideas and the technical capability
              required to execute them. Many founders struggled to find reliable
              partners who understood both technology and business.
            </p>
          </div>
        </div>
        <div className="relative w-1/3 md:w-1/2 flex flex-col items-center gap-1">
          <div className="bg-[#FFFFFF33] w-11 h-11 rounded-full border border-[#D9D9D9]"></div>
          <div className="absolute flex md:w-2/3  flex-col -left-15 md:right-1/4 -translate-x-1/2">
            <h1 className="font-clash text-white text-3xl text-end font-semibold">
              The Bridge
            </h1>
            <p className={`${inter.className} text-white text-end mt-8`}>
              Anthill Networks bridges that gap by combining strategic thinking
              with execution — helping businesses move from concept to product
              with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/AntCastle.svg"
          width={785}
          height={785}
          alt="ant castle"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}

export default HowItStarted;
