import { useState } from 'react';
// import { Success } from '../Success/Success';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup } from '../../store/actions/authAction';

export const CreatePassword = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {authLoader}=useSelector(state=>state.auth)

  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // console.log(isSubmitted, 'isSubmitted');

  const handleContinue = (event) => {
    event.preventDefault();

    if(password!==confirmPassword){toast.error('Password and confirm password not match');return;}
    // setIsSubmitted(true);

   const details= localStorage.getItem('signupform');
   let payload={role,password_repeat:confirmPassword,password, ...JSON.parse(details)}
   console.log('payload: ', payload);

   dispatch(signup(payload, (msg)=>{
    localStorage.removeItem('signupform');
    toast.success(msg);
    navigate("/sign-in")
   }))
  };
  return (
    <div className=" bg-white md:bg-[#009C76] min-h-[100vh] py-[40px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="hidden md:block">
            <img src="/assets/Frame 1171274897.svg" className="max-w-full w-full h-auto" alt="" />
          </div>
          {/* {isSubmitted ? (
            <Success />
          ) : ( */}
            <div className="rounded-[30px] w-full bg-white p-4" style={{ border: '1px solid #D6D6D680' }}>
              <form  onSubmit={handleContinue}>
              <div className="max-w-full text-center md:max-w-[353px] mx-auto py-[30px]">
                <img src="/assets/Button (1).svg" height={100} width={100} className="mx-auto" alt="" />
                <h1 className="mt-[20px] font-extrabold text-[28px] text-black leading-[28px]">Set new password</h1>
                <p className="text-[#8D8D8D] py-3 text-[14px] font-normal leading-[16.71px]">
                  Your new password must be different to previously <br /> used passwords 🤗
                </p>
                <div className="form py-[30px]">


                <div className="flex flex-col">
                  <label htmlFor="" className="text-[#8D8D8D] text-start text-[12px] font-bold m-0 leading-[13.2px]">
                    Role
                  </label>
                  <div
                    className="flex gap-2 px-2 py-2 mb-2 items-center rounded-[10px] w-full bg-white"
                    style={{ border: '1px solid #009C76' }}
                  >
                  <select
                  required
                    name="role"
                    id="role"
                    className="border-none outline-none bg-transparent py-2 px-2 rounded-[10px] w-full focus:ring-0"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="restaurantOwner">Restaurant Owner</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                </div>

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
                      required
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="border-none outline-none bg-white w-full"
                        placeholder="****"
                        name="password"
                        id="password"
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
                      required
                         value={confirmPassword}
                         onChange={(e)=>setConfirmPassword(e.target.value)}
                        type="password"
                        className="border-none outline-none bg-white w-full"
                        placeholder="****"
                        name="confirmpassword"
                        id="confirmpassword"
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
                  disabled={authLoader}
                    className="w-full rounded-[10px] py-4 font-semibold text-[20px] bg-[#009C76] text-white"
                
                  >
                    {authLoader?"Submiting...":"Submit"}
                  </button>
                </div>
              </div>
              </form>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};
