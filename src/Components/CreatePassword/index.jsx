import React, { useState } from 'react';
import { Success } from '../Success/Success';

export const CreatePassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted, 'isSubmitted');

  const handleContinue = () => {
    setIsSubmitted(true);
  };
  return (
    <div className=" bg-white md:bg-[#009C76] min-h-[100vh] py-[40px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="hidden md:block">
            <img src="/assets/Frame 1171274897.svg" className="max-w-full w-full h-auto" alt="" />
          </div>
          {isSubmitted ? (
            <Success />
          ) : (
            <div className="rounded-[30px] w-full bg-white p-4" style={{ border: '1px solid #D6D6D680' }}>
              <div className="max-w-full text-center md:max-w-[353px] mx-auto py-[30px]">
                <img src="/assets/Button (1).svg" height={100} width={100} className="mx-auto" alt="" />
                <h1 className="mt-[20px] font-extrabold text-[28px] text-black leading-[28px]">Set new password</h1>
                <p className="text-[#8D8D8D] py-3 text-[14px] font-normal leading-[16.71px]">
                  Your new password must be different to previously <br /> used passwords 🤗
                </p>
                <div className="form py-[30px]">
                  <div
                    className="flex gap-2 px-2 py-2 mb-2 items-center rounded-[10px] bg-white"
                    style={{ border: '1px solid #009C76' }}
                  >
                    <img src="/assets/Icons (1).svg" height={20} width={20} alt="" />
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="text-[#8D8D8D] text-start text-[12px] font-bold m-0 leading-[16.71px]"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-none outline-none bg-white w-full"
                        placeholder="****"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div
                    className="flex gap-2 px-2 py-2 mb-2 items-center rounded-[10px] bg-white"
                    style={{ border: '1px solid #D6D6D6' }}
                  >
                    <img src="/assets/Icons (3).svg" height={20} width={20} alt="" />
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="text-[#8D8D8D] text-start text-[12px] font-bold m-0 leading-[16.71px]"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="border-none outline-none bg-white w-full"
                        placeholder="****"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex gap-2 mb-2 items-center">
                      <img src="/assets/Primary Icons.svg" alt="" />
                      <p className="text-[#8D8D8D]  m-0 text-[14px] font-normal leading-[16.71px]">
                        Must be at least 8 characters
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src="/assets/Primary Icons.svg" alt="" />
                      <p className="text-[#8D8D8D]  m-0 text-[14px] font-normal leading-[16.71px]">
                        Must contain one special character
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="w-full rounded-[10px] py-4 font-semibold text-[20px] bg-[#009C76] text-white"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
