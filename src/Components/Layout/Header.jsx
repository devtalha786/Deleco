import React from 'react';

export const Header = () => {
  return (
    <div className="py-4  ">
      <div className="container mx-auto px-[20px]">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src="/assets/Logo (1).svg" width={141} height={37} alt="" />
          </div>
          <div className="flex gap-3">
            <button className="rounded-[10px] py-[10px] px-[30px] bg-white text-[#009C76] font-semibold text-[16px]">
              Collaborate
            </button>
            <a href="/sign-in">
              <button className="rounded-[10px] py-[10px] px-[30px] bg-white text-[#009C76] font-semibold text-[16px]">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
