import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const {isAdmin,isRestaurantOwner}=useSelector(state=>state.auth)
  
  const options = isAdmin||isRestaurantOwner?[
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
      path: '/',
    },
  ]:[{
    name: 'Logout',
    path: '/',
  },];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if(option.path=="/"){
      dispatch(logout());
    }
    setSelectedOption(option);
    // onSelect(option);
    setIsOpen(false);
    navigate(option.path)
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <img src="/assets/small btn.svg" className="cursor-pointer" alt="" onClick={toggleDropdown} />
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
                <button
                 key={option.path}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.name}
                </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
