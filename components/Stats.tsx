import Image from "next/image";

function Stats() {
  return (
    <div className="h-150 flex items-center justify-center">
      <div className="w-7xl ">
        <div className="grid gap-4 grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-stretch">
          <div className="flex gap-4 h-auto flex-col">
            <Image
              src={"/ClientRetention.svg"}
              height={276}
              width={772}
              alt="client retention"
              className="w-auto h-auto"
            />
            <div className="flex gap-8 flex-1 font-clash">
              <div className="border rounded-4xl  grow flex flex-col justify-between w-1/2 border-[#D9D9D9] shadow-[0_1px_7px_0px_#00000024] p-6">
                <h1 className="font-bold text-8xl pt-3">50+</h1>
                <div>
                  <div className="h-0.5 w-full bg-[#D9D9D9]"></div>
                  <h2 className="font-medium text-3xl mt-4">
                    Projects Delivered
                  </h2>
                </div>
              </div>
              <div className="border rounded-4xl w-1/2 border-[#D9D9D9] flex flex-col justify-between shadow-[0_1px_7px_0px_#00000024] p-6">
                <h1 className="font-bold text-8xl pt-3">2x</h1>
                <div>
                  <div className="h-0.5 w-full bg-[#D9D9D9]"></div>
                  <h2 className="font-medium text-3xl mt-4">Faster Delivery</h2>
                </div>
              </div>
            </div>
          </div>

          <div >
            <Image
              src={"/WorldWide.svg"}
              width={512}
              height={566}
              alt="world wide"
              className="w-auto h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
