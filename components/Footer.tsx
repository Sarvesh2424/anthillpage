import { Mail, Minus, Phone, Plus } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dmsans = DM_Sans({});

function Footer() {
  return (
    <div
      className={`h-225 bg-[rgb(30,42,46)] flex flex-col relative ${dmsans.className}`}
    >
      <div className="absolute bottom-0">
        <Image src={"/Gradient.svg"} height={700} width={680} alt="gradient w-auto h-auto"/>
      </div>
      <div className="flex items-center flex-col mt-12">
        <div className="font-bold text-white text-xl w-6xl flex justify-evenly ">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>

        <div className="w-7xl mt-12 bg-linear-to-r mb-12 from-transparent via-white to-transparent h-px"></div>
      </div>
      <div className="px-20 flex justify-between">
        <div className="w-2/5 flex-col text-white">
          <div>
            <Image
              src="/Logo.svg"
              width={255.55}
              height={30}
              alt="logo"
              className="w-auto h-auto"
              loading="eager"
            />
          </div>
          <h2 className="text-xl font-semibold mt-12">
            Accelerating MVPs for Startups Everywhere
          </h2>
          <p className="text-lg w-2/3 font-medium mt-4">
            Helping early-stage startups to launch impactful MVPs with speed and
            precision
          </p>
          <h2 className="text-xl font-medium mt-16">Follow us</h2>
          <div className="flex gap-4 mt-4">
            <Image
              src="/YT.svg"
              height={50}
              width={50}
              alt="social"
              className="w-auto h-auto"
            />
            <Image
              src="/WH.svg"
              height={50}
              width={50}
              alt="social"
              className="w-auto h-auto"
            />
            <Image
              src="/INS.svg"
              height={50}
              width={50}
              alt="social"
              className="w-auto h-auto"
            />
            <Image
              src="/X.svg"
              height={50}
              width={50}
              alt="social"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className="w-1/5 flex-col space-y-4">
          <h1 className="text-white font-bold text-xl">Contact Us</h1>
          <div className="font-semibold text-lg text-white flex gap-2 items-center">
            <Mail /> hr@anthillnetworks.com
          </div>
          <div className="font-semibold text-lg text-white flex gap-2 items-center">
            <Phone /> +91 93630 88428
          </div>
        </div>
        <div className="w-2/5 flex-col space-y-12">
          <div>
            <div className="flex gap-4 justify-end">
              <h1 className="font-clash  text-white text-4xl font-semibold">
                United kingdom
              </h1>
              <button className="text-white  p-2 rounded-full border border-white">
                <Minus />
              </button>
            </div>
            <p className="text-[#FFFFFFBF] font-medium -w-1/5 text-end mt-4">
              19 Harcourt Street, Luton, LU1 3QH, ENGLAND
            </p>
          </div>
          <div>
            <div className="flex gap-4 justify-end">
              <h1 className="font-clash  text-white text-4xl font-semibold">
                Canada
              </h1>
              <button className="text-white  p-2 rounded-full border border-white">
                <Minus />
              </button>
            </div>
            <p className="text-[#FFFFFFBF] font-medium -w-1/5 text-end mt-4">
              530 Dundonald St, Fredericton, New Brunswick, Canada
            </p>
          </div>
          <div>
            <div className="flex gap-4 justify-end">
              <h1 className="font-clash  text-white text-4xl font-semibold">
                UAE
              </h1>
              <button className="text-white  p-2 rounded-full border border-white">
                <Minus />
              </button>
            </div>
            <p className="text-[#FFFFFFBF] font-medium -w-1/5 text-end mt-4">
              G1, BuGhanem Bldg, Ind Area 4, Sharjah, UAE
            </p>
          </div>
          <div>
            <div className="flex gap-4 justify-end">
              <h1 className="font-clash  text-white text-4xl font-semibold">
                India
              </h1>
              <button className="text-white  p-2 rounded-full border border-white">
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
