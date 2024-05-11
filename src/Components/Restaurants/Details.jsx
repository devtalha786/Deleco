import React from 'react';

export const Details = () => {
  return (
    <div className="">
      <div className="cover">
        <div className="relative">
          <img src="/assets/Cover.svg" className="max-w-full w-full h-[300px] object-cover" alt="" />
          <div className="container mx-auto px-[20px]   ">
            <div className="flex justify-between absolute top-[30px] w-[92%]">
              <img src="/assets/small btn (1).svg" width={34} height={34} alt="" />
              <img src="/assets/small btn (2).svg" width={34} height={34} alt="" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-[20px]  py-[30px]">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src="/assets/Mask group.svg" width={60} height={50} alt="" />
              <h1 className="text-[#151515] text-[24px] font-bold">Mexican restaurant</h1>
            </div>
            <img src="/assets/Icons (4).svg" width={27} height={27} className="cursor-pointer" alt="" />
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="desc">
                <p className="font-normal text-[#151515] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laudantium odit facilis at.
                  Quisquam fuga sunt doloremque officiis consectetur et accusamus tenetur harum eligendi. Adipisci ipsam
                  quibusdam totam doloremque odit?
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[20px] text-[#151515] mb-3">Packages</h1>
                <div className="rounded-[12px] bg-white w-full shadow-md mb-3 flex max-w-[353px]">
                  <img src="/assets/Rectangle 20.svg" width={101} height={92} alt="" />
                  <div className="p-3 w-full">
                    <h1 className="font-semibold text-[16px] text-[#151515]">Surprise bag</h1>
                    <div className="flex justify-between items-center w-full">
                      <p className="font-normal text-[#151515] text-[14px]">
                        Pickup time is at <br /> 14:30-15:00
                      </p>
                      <div className="flex gap-1 ">
                        <h1 className="text-[#009C76] font-semibold text-[24px]">4</h1>
                        <h3 className="text-[#009C76] font-semibold text-[15px]">99</h3>
                        <h3 className="text-[#009C76] font-semibold text-[15px] mb-0 mt-2">€</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[12px] bg-white w-full shadow-md flex max-w-[353px]">
                  <img src="/assets/Rectangle 20.svg" width={101} height={92} alt="" />
                  <div className="p-3 w-full">
                    <h1 className="font-semibold text-[16px] text-[#151515]">Surprise bag</h1>
                    <div className="flex justify-between items-center w-full">
                      <p className="font-normal text-[#151515] text-[14px]">
                        Pickup time is at <br /> 14:30-15:00
                      </p>
                      <div className="flex gap-1 ">
                        <h1 className="text-[#009C76] font-semibold text-[24px]">4</h1>
                        <h3 className="text-[#009C76] font-semibold text-[15px]">99</h3>
                        <h3 className="text-[#009C76] font-semibold text-[15px] mb-0 mt-2">€</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
