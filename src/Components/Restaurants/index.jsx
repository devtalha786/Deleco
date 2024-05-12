import React, { useState } from 'react';
import { Footer } from '../Layout/Footer';
import Dropdown from '../Dropdown';
import CreateRestaurant from '../Modal/CreateRestaurant';
import { HeaderGreen } from '../Layout/HeaderGreen';
import DeleteRestaurant from '../Modal/DeletRestaurant';
const cards = [
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  // Add more card objects as needed
];

export const Restaurants = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  const options = [
    {
      name: 'Admin',
      path: '#',
    },
    {
      name: 'User',
      path: '/all-user',
    },
    {
      name: 'Logout',
      path: '/sign-in',
    },
  ];

  const handleSelect = (option) => {
    setSelectedItem(option);
  };
  return (
    <div>
      <CreateRestaurant
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        setTitle={setTitle}
        title={title}
        description={description}
        setDescription={setDescription}
        images={images}
        setImages={setImages}
      />
      <DeleteRestaurant isOpen={isModalOpen2} onClose={handleCloseModal2} />
      <HeaderGreen options={options} handleSelect={handleSelect} />

      <div className="container mx-auto px-[20px]">
        <div className="py-[30px]">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-[34px] text-black mb-4">My restaurants</h1>
            <div
              className="bg-[#F1F9F7] p-2 text-[#009C76] cursor-pointer rounded-[11.76px] font-bold"
              onClick={handleOpenModal}
            >
              Add Restaurant
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
            {cards.map((card, index) => (
              <div
                className="cardd rounded-[13.8px] relative"
                style={{
                  boxShadow: '0px 5.52px 19.32px 0px #00000026',
                }}
              >
                <img src={card.image} className="max-w-full w-full h-auto" alt="" />
                <div className="flex px-3 justify-between absolute w-full top-5">
                  <img src="/assets/trash.svg" alt="" onClick={handleOpenModal2} className="cursor-pointer" />
                  <img src="/assets/uil_edit (1).svg" alt="" onClick={handleOpenModal} className="cursor-pointer" />
                </div>
                <div className="p-3 bg-white">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">{card.title}</h3>
                    <a href="/details" key={index}>
                      <img src="/assets/ic_eye.svg" alt="" />
                    </a>
                  </div>
                  <p className="text-[#151515] text-[16.56px] leading-[22.59px] font-normal">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
