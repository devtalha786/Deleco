import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../Layout/Footer';
import { HeaderGreen } from '../Layout/HeaderGreen';
import CreateRestaurant from '../Modal/CreateRestaurant';
import DeleteRestaurant from '../Modal/DeletRestaurant';
import { deleteRestaurant, getAllRestaurant } from '../../store/actions/restaurantAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../store/actions/authAction';
import UpdateRestaurant from '../Modal/UpdateRestaurant';
const cards = [
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  { title: 'Mexican Restaurant', description: 'Tortilla, Nachos, Burrito, ...', image: '/assets/Rectangle 1.svg' },
  // Add more card objects as needed
];

export const Restaurants = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {isAdmin,uid,isRestaurantOwner}=useSelector(state=>state.auth)
  // const {restauents}=useSelector(state=>state.restaurant)
   const [restauents,setRestaurants]=useState([])

  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem: ', selectedItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [images, setImages] = useState([]);
   const [selectedRestaurant,setSelectedRestaurant]=useState({})

  const toggleUpdateModal = () =>setIsUpdateModalOpen(!isUpdateModalOpen)
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
  const handleDelete= () => {

    dispatch(deleteRestaurant(restaurantId,(res) => {
      dispatch(getAllRestaurant((data) => {
        setRestaurants(data)
        setIsModalOpen2(false);
  },()=>{
    toast.error('token expirred.login again')
    dispatch(logout());  }
));
    }))
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


  useEffect(() => {

    if(uid){
      dispatch(getAllRestaurant((data) => {
          setRestaurants(data)
    },()=>{
      toast.error('token expirred.login again')
      dispatch( logout())
      navigate('/sign-in')

    }));
  }else{
    navigate('/sign-in')
  }
    
  }, [uid]);

  
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
        setRestaurants={setRestaurants}
      />
      <UpdateRestaurant
        isOpen={isUpdateModalOpen}
        onClose={toggleUpdateModal}
        selectedRestaurant={selectedRestaurant}
        setRestaurants={setRestaurants}
      />
      <DeleteRestaurant isOpen={isModalOpen2}  onClose={handleCloseModal2} onConfirm={handleDelete} />
      <HeaderGreen  />

      <div className="container mx-auto px-[20px]">
        <div className="py-[30px]">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-[34px] text-black mb-4">My restaurants</h1>
          {(isAdmin || isRestaurantOwner )&&  <div
              className="bg-[#F1F9F7] p-2 text-[#009C76] cursor-pointer rounded-[11.76px] font-bold"
              onClick={handleOpenModal}
            >
              Add Restaurant
            </div>}
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
            {restauents?.map((card) => (
              <div
              key={card._id}
                className="cardd rounded-[13.8px] relative"
                style={{
                  boxShadow: '0px 5.52px 19.32px 0px #00000026',
                }}
              >
                <img src="/assets/Rectangle 1.svg" className="max-w-full w-full h-auto" alt="" />
               {(isAdmin || isRestaurantOwner) && <div className="flex px-3 justify-between absolute w-full top-5">
                  <img src="/assets/trash.svg"  alt="" onClick={()=>{
                    handleOpenModal2()
                  setRestaurantId(card._id)
                  }} className="cursor-pointer" />
                  <img src="/assets/uil_edit (1).svg" alt="" onClick={()=>{
                    setSelectedRestaurant(card)
                    toggleUpdateModal()}} className="cursor-pointer" />
                </div>}
                <div className="p-3 bg-white">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-[22px] leading-[30.91px] mb-0">{card.name}</h3>
                      <img src="/assets/ic_eye.svg" className="cursor-pointer" onClick={()=>{
                        navigate(`/details/${card._id}`)
                      }} alt="" />
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
