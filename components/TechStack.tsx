import Image from "next/image";

function TechStack() {
  return (
    <div className="relative max-w-screen md:aspect-1440/760">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-clash text-5xl font-semibold mt-12">
          Technology Stack
        </h1>
        <p className="font-['Arial'] text-[#0000008A] mt-4 md:max-w-1/4 text-center text-xl">
          Modern Tools, Scalable Results, We use modern, scalable technologies
          to build high-performance digital products.
        </p>
      </div>
      <div className="flex md:px-20 mt-16 justify-between">
        <div className="flex p-4 flex-col gap-4 border border-[#DCDCDC] rounded-xl">
          <h1 className="font-clash font-semibold text-3xl">Frontent</h1>
          <div>
            <Image
              src="/Technologies.svg"
              width={312}
              height={84}
              alt="tech"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 border p-4 border-[#DCDCDC] rounded-xl">
          <h1 className="font-clash font-semibold text-3xl">Mobile</h1>
          <div>
            <Image
              src="/Technologies.svg"
              width={312}
              height={84}
              alt="tech"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex md:px-20 mt-16 justify-between">
        <div className="flex p-4 flex-col gap-4 border border-[#DCDCDC] rounded-xl">
          <h1 className="font-clash font-semibold text-3xl">Backend</h1>
          <div>
            <Image
              src="/Technologies.svg"
              width={312}
              height={84}
              alt="tech"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 border p-4 border-[#DCDCDC] rounded-xl">
          <h1 className="font-clash font-semibold text-3xl">Cloud & DevOps</h1>
          <div>
            <Image
              src="/Technologies.svg"
              width={312}
              height={84}
              alt="tech"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Image
          src={"/Laptop.svg"}
          alt="laptop"
          height={357}
          width={472}
          className="w-auto md:opacity-100 opacity-95 md:blur-none blur-xs h-auto"
        />
      </div>
    </div>
  );
}

export default TechStack;
