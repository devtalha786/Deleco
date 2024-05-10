import React from 'react';

export const Success = () => {
  return (
    <div
      className="rounded-[30px] w-full bg-white p-4 h-full flex items-center"
      style={{ border: '1px solid #D6D6D680' }}
    >
      <div className="max-w-full text-center md:max-w-[353px] mx-auto py-[30px]">
        <img src="/assets/Button (2).svg" height={100} width={100} className="mx-auto" alt="" />
        <h1 className="mt-[20px] font-extrabold text-[28px] text-black leading-[28px]">Successful!</h1>
        <p className="text-[#8D8D8D] py-3 text-[14px] font-normal leading-[16.71px]">
          Your account has been successfully created ☺️
        </p>

        <div>
          <button className="w-full rounded-[10px] py-4 font-semibold text-[20px] bg-[#009C76] mt-5 text-white">
            Select Location
          </button>
        </div>
      </div>
    </div>
  );
};
