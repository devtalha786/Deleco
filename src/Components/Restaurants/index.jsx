import React, { useState } from 'react';
import { Footer } from '../Layout/Footer';
import Dropdown from '../Dropdown';

export const Restaurants = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const options = ['Admin', 'Owner'];

  const handleSelect = (option) => {
    setSelectedItem(option);
  };
  return (
    <div>
      <div className="py-4">
        <div className="container mx-auto px-[20px]">
          <div className="flex justify-between">
            <div className="logo">
              <img src="/assets/Logo (2).svg" width={141} height={37} alt="" />
            </div>
            <div className="dropdown">
              <Dropdown options={options} onSelect={handleSelect} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px]">
        <div className="py-[30px]">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-[34px] text-black mb-4">My restaurants</h1>
            <div className="bg-[#F1F9F7] p-2 text-[#009C76] cursor-pointer rounded-[11.76px] font-bold">
              Add Restaurant
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
            <a href="/details">
              <div
                className="cardd rounded-[13.8px]"
                style={{
                  boxShadow: '0px 5.52px 19.32px 0px #00000026',
                }}
              >
                <img src="/assets/Rectangle 1.svg" className="max-w-full w-full h-auto" alt="" />
                <div className="p-3 bg-white">
                  <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">Mexican Restaurant</h3>
                  <p className="text-[#151515] text-[16.56px] leading-[22.59px] font-normal">
                    Tortilla, Nachos, Burrito, ...
                  </p>
                </div>
              </div>
            </a>

            <div
              className="cardd rounded-[13.8px]"
              style={{
                boxShadow: '0px 5.52px 19.32px 0px #00000026',
              }}
            >
              <img src="/assets/Rectangle 1.svg" className="max-w-full w-full h-auto" alt="" />
              <div className="p-3 bg-white">
                <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">Mexican Restaurant</h3>
                <p className="text-[#151515] text-[16.56px] leading-[22.59px] font-normal">
                  Tortilla, Nachos, Burrito, ...
                </p>
              </div>
            </div>
            <div
              className="cardd rounded-[13.8px]"
              style={{
                boxShadow: '0px 5.52px 19.32px 0px #00000026',
              }}
            >
              <img src="/assets/Rectangle 1.svg" className="max-w-full w-full h-auto" alt="" />
              <div className="p-3 bg-white">
                <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">Mexican Restaurant</h3>
                <p className="text-[#151515] text-[16.56px] leading-[22.59px] font-normal">
                  Tortilla, Nachos, Burrito, ...
                </p>
              </div>
            </div>
            <div
              className="cardd rounded-[13.8px]"
              style={{
                boxShadow: '0px 5.52px 19.32px 0px #00000026',
              }}
            >
              <img src="/assets/Rectangle 1.svg" className="max-w-full w-full h-auto" alt="" />
              <div className="p-3 bg-white">
                <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">Mexican Restaurant</h3>
                <p className="text-[#151515] text-[16.56px] leading-[22.59px] font-normal">
                  Tortilla, Nachos, Burrito, ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
