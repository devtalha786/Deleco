import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const {uid}=useSelector(state=>state.auth)
  const navigate=useNavigate()
 const handleClick=()=>{
   if(uid){
    navigate('/restaurants')
   }else{
    navigate('/sign-in')

   }
 }
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
            
              <button onClick={handleClick} className="rounded-[10px] py-[10px] px-[30px] bg-white text-[#009C76] font-semibold text-[16px]">
                Get Started
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
