import React from 'react';

export const SignUp = () => {
  return (
    <div className=" bg-white md:bg-[#009C76] min-h-[100vh] py-[40px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="hidden md:block">
            <img src="/assets/Frame 1171274897.svg" className="max-w-full w-full h-auto" alt="" />
          </div>
          <div className="rounded-[30px] w-full bg-white p-4" style={{ border: '1px solid #D6D6D680' }}>
            <div className="max-w-full text-center md:max-w-[353px] mx-auto py-[30px]">
              <img src="/assets/Design 1.svg" height={100} width={100} className="mx-auto" alt="" />
              <h1 className="mt-[20px] font-extrabold text-[28px] text-black leading-[28px]">Tell us about yourself</h1>
              <p className="text-[#8D8D8D] py-3 text-[14px] font-normal leading-[16.71px]">Drop your Name and Email</p>
              <div className="form py-[30px]">
                <div
                  className="flex gap-2 px-2 py-2 mb-2 items-center rounded-[10px] bg-white"
                  style={{ border: '1px solid #009C76' }}
                >
                  <img src="/assets/Icons (1).svg" height={20} width={20} alt="" />
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-[#8D8D8D] text-start text-[12px] font-bold m-0 leading-[16.71px]">
                      Name
                    </label>
                    <input type="text" className="border-none outline-none bg-white w-full" name="" id="" />
                  </div>
                </div>
                <div className="flex gap-2 px-2 py-2 mb-2 items-center rounded-[10px] bg-[#F7F7F7]">
                  <img src="/assets/Icons (2).svg" height={20} width={20} alt="" />
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-[#8D8D8D] text-start text-[12px] font-bold m-0 leading-[16.71px]">
                      Email
                    </label>
                    <input
                      type="text"
                      className="border-none outline-none bg-[#F7F7F7] w-full"
                      placeholder="testemail@email.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <a href="/password">
                  <button className="w-full rounded-[10px] py-4 font-semibold text-[20px] bg-[#009C76] text-white">
                    Continue
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
