import React from 'react';

export const HeroSection = () => {
  return (
    <div className="pt-[30px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="md:col-span-6 col-span-12">
            <div className="">
              <h1 className="text-white font-extrabold text-[53px] leading-[76px]">
                Fresh surplus meals, delivered to your doorstep
              </h1>
              <p className="text-[24px] leading-[28.64px] text-[#FCFEFF] font-normal md:max-w-[489px] w-full">
                Unlock Affordable Gourmet Delights while Reducing Food Waste
              </p>
              {/* <div className="mt-3">
                <div
                  className="rounded-[54px] md:max-w-[634px] bg-white w-full"
                  style={{ border: '1px solid #D6D6D6' }}
                >
                  <div
                    className="input relative flex ga-2 items-center justify-between rounded-[54px] p-2"
                    style={{ borderBottom: '1px solid #D6D6D6' }}
                  >
                    <div className="flex gap-2">
                      <img src="/assets/Icons.svg" height={22} width={22} alt="" />
                      <input
                        type="text"
                        placeholder="Search anything"
                        className="border-none outline-none bg-transparent px-2"
                        name=""
                        id=""
                      />
                    </div>

                    <button className="bg-[#F1F9F7] rounded-[29.9px] px-3 py-2 text-[#009C76] font-medium text-[16px]">
                      Use current location
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="img md:mb-[-56px]">
              <img src="/assets/Untitled (3).svg" className="max-w-full w-full h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
