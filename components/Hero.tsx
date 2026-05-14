"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const dmsans = DM_Sans({});

function Hero() {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="h-225 max-w-screen relative bg-[#1E2A2E] font-clash">
      <div className="hidden md:block h-[88.55px] px-16">
        <div
          className={` ${dmsans.className} border-t-0 max-w-screen border-l-0 border-r-0 h-full flex items-center justify-between`}
        >
          <Image
            src="/Logo.svg"
            width={255.55}
            height={30}
            alt="logo"
            className="w-auto h-auto"
            loading="eager"
          />
          <div className="flex gap-8 text-lg font-semibold text-white">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Services</button>
          </div>
          <div className="flex gap-4">
            <button className="border border-white rounded-4xl px-6 py-2 items-center flex gap-2 font-bold text-white">
              View Portfolio
              <ArrowRight />
            </button>
            <button className="bg-linear-to-br from-[#6CEFEF] via-[#4648FF] to-[#712FFF] hover:scale-110  transition-all hover:cursor-pointer text-white rounded-4xl px-6 py-3 font-bold">
              Get a Free Consultation
            </button>
          </div>
        </div>
        <div className="bg-linear-to-r mt-2 from-transparent via-white to-transparent h-px"></div>
      </div>
      <div className="md:hidden">
        <div
          className={` ${dmsans.className} relative px-4 py-4 border-t-0 max-w-screen border-l-0 border-r-0 h-full flex items-center justify-between`}
        >
          <Image
            src="/Logo.svg"
            width={255.55}
            height={30}
            alt="logo"
            className="w-auto h-auto"
            loading="eager"
          />
          {open ? (
            <button
            className="text-white"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((p) => !p);
              }}
            >
              <X />
            </button>
          ) : (
            <button
            className="text-white"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((p) => !p);
              }}
            >
              <Menu />
            </button>
          )}
          {open && (
            <div className="absolute top-10 rounded-3xl shadow-2xl bg-[#1E2A2E] p-8 right-0">
              <div className="flex flex-col gap-8 text-lg font-semibold text-white">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Services</button>
              </div>
              <div className="flex flex-col gap-4">
                <button className="border mt-8 border-white rounded-4xl px-6 py-2 items-center flex gap-2 font-bold text-white">
                  View Portfolio
                  <ArrowRight />
                </button>
                <button className="bg-linear-to-br from-[#6CEFEF] via-[#4648FF] to-[#712FFF] hover:scale-110  transition-all hover:cursor-pointer text-white rounded-4xl px-6 py-3 font-bold">
                  Get a Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-linear-to-r mt-2 from-transparent via-white to-transparent h-px"></div>
      </div>
      <div className="h-full flex flex-col items-center justify-center pb-12">
        <h1 className="md:text-6xl text-center text-3xl text-white font-clash font-semibold">
          Building Scalable Digital Product{" "}
        </h1>
        <h1 className="md:text-6xl text-3xl text-white font-clash font-semibold mt-4">
          That Businesses{" "}
          <span className="inline-block text-[#6CEFEF]">Trust</span>
        </h1>
        <p
          className={`${dmsans.className} text-white mt-12 text-lg w-2/3 md:w-1/3 text-center`}
        >
          With Anthill Networks, you don’t just build products you gain a
          technology partner committed to your long-term success.
        </p>
        <button
          className={`bg-white rounded-4xl text-[#1E2A2E] px-6 py-3 ${dmsans.className} font-bold mt-8`}
        >
          We take ownership of outcomes
        </button>
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <Image
          src="/Ants.svg"
          width={1440}
          height={100}
          className="w-auto h-auto"
          alt="ants"
          loading="eager"
        />
      </div>
    </div>
  );
}

export default Hero;
