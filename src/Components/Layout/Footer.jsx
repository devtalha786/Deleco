import React from 'react';

export const Footer = () => {
  const cities = [
    { name: 'New York', state: 'New York' },
    { name: 'Chicago', state: 'Illinois' },
    { name: 'San Francisco', state: 'California' },
    { name: 'Kansas City', state: 'Missouri' },
    { name: 'Salt Lake City', state: 'Utah' },
  ];
  const menuItems = [
    { name: 'About' },
    { name: 'Blog' },
    { name: 'Careers' },
    { name: 'Partners' },
    { name: 'Others' },
    { name: 'Work with us' },
  ];
  const items = [
    { title: 'Terms and conditions' },
    { title: 'Privacy policy' },
    { title: 'Cookies' },
    { title: 'Partner classifications' },
  ];
  const data = [{ title: 'FAQ' }, { title: 'Contact us' }, { title: 'Customer Service' }];
  return (
    <div className="bg-black py-[40px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2">
          <div className="flex flex-col gap-3">
            <img src="/assets/Logo (1).svg" width={141} height={37} alt="" />
            <div className="pt-3">
              <p className="font-bold text-[12px] text-white">Follow us on</p>
              <div className="flex gap-2 mt-2">
                <img src="/assets/Img.svg" width={32} height={32} alt="" />
                <img src="/assets/Img (1).svg" width={32} height={32} alt="" />
                <img src="/assets/Img (2).svg" width={32} height={32} alt="" />
                <img src="/assets/Img (3).svg" width={32} height={32} alt="" />
                <img src="/assets/Img (4).svg" width={32} height={32} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-[20px]">Cities</h1>
            <div className="mt-3">
              <ul className="list-none text-white">
                {cities.map((city) => (
                  <li className="text-[14px] font-normal leading-[28px]">{city.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-[20px]">Information</h1>
            <div className="mt-3">
              <ul className="list-none text-white">
                {menuItems.map((city) => (
                  <li className="text-[14px] font-normal leading-[28px]">{city.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-[20px]">Legal notice</h1>
            <div className="mt-3">
              <ul className="list-none text-white">
                {items.map((city) => (
                  <li className="text-[14px] font-normal leading-[28px]">{city.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-[20px]">Help</h1>
            <div className="mt-3">
              <ul className="list-none text-white">
                {data.map((city) => (
                  <li className="text-[14px] font-normal leading-[28px]">{city.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
