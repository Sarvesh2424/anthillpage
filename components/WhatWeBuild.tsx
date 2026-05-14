import Image from "next/image";

function WhatWeBuild() {
  return (
    <div className="aspect-1440/2300 relative">
      <div className="mt-20 p-16">
        <h1 className="font-clash text-5xl font-semibold">What We Build</h1>
        <p className="font-['Arial'] font-normal text-xl text-[#0000008A] mt-8 max-w-1/3">
          End-to-end digital products. We design and develop end-to-end digital
          products that combine usability, performance, and scalability.
        </p>
        <div className="flex mt-50 flex-col aspect-1440/2100 justify-between">
          {" "}
          <div>
            <div className="flex w-full items-center justify-evenly">
              <div>
                <Image
                  src={"/BUILD1.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  UI/UX Design
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Intuitive, user-centered interfaces that delight and convert.
                </p>
              </div>
              <div>
                <Image
                  src={"/BUILD2.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  SaaS Platforms
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Scalable cloud-native platforms built for growth.
                </p>
              </div>
            </div>
            <div className="mt-36 flex w-full items-center justify-center">
              <div>
                <Image
                  src={"/BUILD3.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  MVP Development
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Rapid prototyping to validate your idea and reach market fast.
                </p>
              </div>
            </div>
            <div className="mt-36 flex w-full items-center justify-end">
              <div>
                <Image
                  src={"/BUILD4.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  AI Solutions
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Intelligent automation and AI-powered product features.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-36 flex w-full items-center justify-start">
              <div>
                <Image
                  src={"/BUILD5.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  Web Applications
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  High-performance web apps with modern architectures.
                </p>
              </div>
            </div>
            <div className="mt-36 flex w-full items-center justify-center">
              <div>
                <Image
                  src={"/BUILD6.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  E-commerce Platforms
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  End-to-end commerce solutions that drive revenue.
                </p>
              </div>
            </div>
            <div className="mt-36 flex w-full items-center justify-evenly">
              <div>
                <Image
                  src={"/BUILD7.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  Mobile Applications
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Cross-platform mobile experiences for iOS and Android.
                </p>
              </div>
              <div>
                <Image
                  src={"/BUILD8.svg"}
                  width={56}
                  height={56}
                  className="w-auto h-auto"
                  alt="feat"
                />
                <h1 className="font-clash font-semibold text-3xl mt-4">
                  Dedicated Teams
                </h1>
                <p className="font-['Arial'] font-normal max-w-3/4 text-lg mt-4">
                  Skilled developers working as your extended team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0">
        <Image
          src="/Union.svg"
          height={1837}
          width={1440}
          className="w-screen h-auto"
          alt="union"
        />
      </div>
    </div>
  );
}

export default WhatWeBuild;
