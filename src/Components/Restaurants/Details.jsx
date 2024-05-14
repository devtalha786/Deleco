import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPackagesByRestaurant, getRestaurantById } from '../../store/actions/restaurantAction';
import { useParams } from 'react-router-dom';
import CreatePackage from '../Modal/CreatePackage';

export const Details = () => {

  const {id}=useParams()
  const dispatch=useDispatch()
  const {isAdmin,isRestaurantOwner}=useSelector(state=>state.auth)
  console.log('isRestaurantOwner: ', isRestaurantOwner);
  
   const [restaurant, setRestaurant] = useState({});
   const [packages,setPackages]=useState([])
   const [isOpen, setIsOpen] = useState(false);
   const toggle=()=>setIsOpen(!isOpen)
   
  useEffect(() => {
    if(id)
      {  
          dispatch(getRestaurantById(id,(data)=>{

            dispatch(getPackagesByRestaurant(id,(packagesData)=>{
              setPackages(packagesData)
            }))
            setRestaurant(data)
          }))
      }
  }, [id]);
  function formatTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
  return (


    <div className="">
      <div className="cover">
        <div className="relative">
          <img src="/assets/Cover.svg" className="max-w-full w-full h-[300px] object-cover" alt="" />
          <div className="container mx-auto px-[20px]   ">
            <div className="flex justify-between absolute top-[30px] w-[92%]">
              <a href="/restaurants">
                <img src="/assets/small btn (1).svg" width={34} height={34} alt="" />
              </a>
              <img src="/assets/small btn (2).svg" width={34} height={34} alt="" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-[20px]  py-[30px]">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src="/assets/Mask group.svg" width={60} height={50} alt="" />
              <h1 className="text-[#151515] text-[24px] font-bold">{restaurant?.record?.name}</h1>
            </div>
            <img src="/assets/Icons (4).svg" width={27} height={27} className="cursor-pointer" alt="" />
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="desc">
                <p className="font-normal text-[#151515] text-[16px]">
                 {restaurant?.record?.description}
                </p>
              </div>
              <div>
           {(isAdmin || isRestaurantOwner) &&   <button className='py-3 px-4  mb-3 bg-[#009C76] text-white rounded-lg shadow-lg float-right ' onClick={toggle}>Add Packages</button>
               } <h1 className="font-bold text-[20px] text-[#151515] mb-3">Packages</h1>
                {packages.length==0&& <div className='flex justify-center place-items-center'>No Packages Found</div>}
                {packages?.map(({name,pickupTime,price,leftAtStore},index)=>{
                 

                  return   <div key={index} className="rounded-[12px] bg-white mt-3 w-full shadow-md mb-3 flex max-w-[353px]">
                  <img src="/assets/Rectangle 20.svg" width={101} height={92} alt="" />
                  <div className="p-3 w-full">
                    <h1 className="font-semibold text-[16px] text-[#151515]">{name}</h1>
                    <div className="flex justify-between items-center w-full">
                      <p className="font-normal text-[#151515] text-[14px]">
                        Pickup time is at <br /> {formatTime(pickupTime)}
                      </p>
                      <div className="flex gap-1 ">
                        <h1 className="text-[#009C76] font-semibold text-[24px]">{price}</h1>
                        <h3 className="text-[#009C76] font-semibold text-[15px]">{leftAtStore}</h3>
                        <h3 className="text-[#009C76] font-semibold text-[15px] mb-0 mt-2">€</h3>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  
                  })}
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreatePackage isOpen={isOpen} onClose={toggle} setPackages={setPackages} restaurantId={id} />
    </div>
  );
};
