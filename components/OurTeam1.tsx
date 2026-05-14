import { Outfit } from "next/font/google";
import Image from "next/image";

const team = [
  {
    name: "Eddy Denison",
    role: "Chief Financial Officer",
  },
  {
    name: "Mark Robben",
    role: "Chief Executive Officer",
  },
  {
    name: "John Dawson",
    role: "Chief Technical Officer",
  },
  {
    name: "Mark Robben",
    role: "Chief Executive Officer",
  },
  {
    name: "John Dawson",
    role: "Chief Technical Officer",
  },
  {
    name: "Eddy Denison",
    role: "Chief Financial Officer",
  },
];

const outfit = Outfit({});

function OurTeam1() {
  return (
    <div className="h-auto md:aspect-1440/800 max-w-screen    ">
      <div className="w-full  flex flex-col items-center mt-16">
        <h1 className="font-clash text-5xl font-semibold mt-12">Our Team</h1>
        <p className="font-['Arial'] text-[#0000008A] mt-4 md:max-w-1/3 text-center text-xl">
          Our team consists of designers, developers, engineers, and product
          specialists who bring deep technical expertise and problem-solving
          ability.
        </p>
        <div
          className={`${outfit.className} max-w-screen p-4 md:p-0 grid-cols-1 grid md:grid-cols-3 w-7xl md:aspect-1440/500 items-stretch gap-12 mt-24`}
        >
          {team.map((member, index) => (
            <div
              className="border relative p-4 min-h-44 min-w-88 border-[#DCDCDC] rounded-4xl"
              key={index}
            >
              <h2 className="font-medium text-lg">{member.name}</h2>
              <p className="text-[#00000066]">{member.role}</p>
              <div className="absolute bottom-0 right-0 ">
                <Image
                  src={"/Star.svg"}
                  alt="star"
                  height={190}
                  width={190}
                  className="w-auto h-auto rounded-br-4xl"
                />
              </div>
              <div className="absolute bottom-0 right-0">
                {member.name === "Eddy Denison" ? (
                  <Image
                    alt="person"
                    width={206}
                    height={176}
                    src="/Eddy.svg"
                    className="w-auto h-auto rounded-r-4xl"
                  />
                ) : (
                  <>
                    {member.name === "John Dawson" ? (
                      <Image
                        alt="person"
                        width={206}
                        height={176}
                        src="/John.svg"
                        className="w-auto h-auto rounded-r-4xl"
                      />
                    ) : (
                      <Image
                        alt="person"
                        width={206}
                        height={176}
                        src={"/Mark.svg"}
                        className="w-auto h-auto rounded-r-4xl"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam1;
