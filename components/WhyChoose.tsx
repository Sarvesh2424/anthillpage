import Image from "next/image";

function WhyChoose() {
  return (
    <div className="md:aspect-1400/1240 max-w-screen p-6 flex items-stretch">
      <div className="bg-[#1E2A2E] relative w-full rounded-4xl flex flex-col items-center">
        <div className="bg-[url('/antbg.jpg')] absolute inset-0 opacity-5 rounded-4xl w-full bg-cover bg-no-repeat bg-center flex flex-col items-center"></div>
        <h1 className="font-clash font-semibold text-5xl mt-30 text-white">
          Why Choose Us
        </h1>
        <p className="font-['Arial'] text-white text-xl mt-4">
          Results that Speak
        </p>
        <div className="flex items-start mt-20 md:-space-x-36">
          <div className="flex flex-col -space-y-2 p-2 md:p-0">
            <div className="relative [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY1.svg"
                alt="why1"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Proven Expertise
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Deep experience in building scalable digital products across
                  industries.
                </p>
              </div>
            </div>

            <div className="relative  [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY3.svg"
                alt="why3"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Flexible Solutions
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Tailored approaches that adapt to your unique business needs
                  and scale.
                </p>
              </div>
            </div>
            <div className="relative md:hidden [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY2.svg"
                alt="why2"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Growth-Focused
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Strong focus on performance, usability, and measurable
                  business growth.
                </p>
              </div>
            </div>

            <div className="relative md:hidden [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY4.svg"
                alt="why4"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Full Ownership
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Complete ownership of product, code, and IP — no lock-ins,
                  ever.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex flex-col -space-y-2 hidden md:mt-58">
            <div className="relative [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY2.svg"
                alt="why2"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Growth-Focused
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Strong focus on performance, usability, and measurable
                  business growth.
                </p>
              </div>
            </div>

            <div className="relative [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] ">
              <Image
                src="/WHY4.svg"
                alt="why4"
                height={551}
                width={522}
                className="w-auto h-auto"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 ">
                <h2 className="font-clash font-semibold text-white text-2xl">
                  Full Ownership
                </h2>
                <p className="font-['Arial'] text-white mt-4">
                  Complete ownership of product, code, and IP — no lock-ins,
                  ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
