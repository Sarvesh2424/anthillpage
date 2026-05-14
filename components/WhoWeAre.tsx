import Image from "next/image";

function WhoWeAre() {
  return (
    <div className="w-full relative aspect-1440/2048 bg-cover bg-[url('/MegaAnt.svg')] bg-no-repeat bg-center">
      <div className="mt-20 p-16">
        <h1 className="font-clash text-5xl font-semibold">Who We Are</h1>
        <p className="font-['Arial'] font-normal text-xl text-[#0000008A] mt-8 max-w-3/5">
          Anthill Networks is a technology-driven product development company
          focused on building scalable, user-centric digital solutions.
        </p>
        <p className="font-['Arial'] text-xl font-normal text-[#0000008A] mt-8 max-w-3/5">
          We partner with founders, startups, and organizations to transform
          ideas into high-quality products — combining design thinking,
          engineering expertise, and strategic execution.
        </p>
        <p className="font-['Arial'] text-xl font-normal text-[#0000008A] mt-8 max-w-3/5">
          Our approach goes beyond development. We align technology with
          business goals to create solutions that deliver measurable outcomes
          and long-term value.
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-4/5 top-1/4">
        <Image
          src="/Crown.svg"
          width={135}
          height={135}
          alt="crown"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}

export default WhoWeAre;
