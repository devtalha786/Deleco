import React, { useEffect } from 'react';
import { HeaderGreen } from '../Layout/HeaderGreen';
import { baseURL } from '../../config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeUser } from '../../store/actions/authAction';

export const AllUser = () => {
  const {isAdmin,uid}=useSelector(state=>state.auth)
   const navigate=useNavigate()
   const dispatch=useDispatch()
  const [users, setUsers] = React.useState([]);
  // const users = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  //   { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  //   { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
  //   { id: 5, name: 'Emily Davis', email: 'emily@example.com' },
  // // ];
  // const options = isAdmin?[
  //   {
  //     name: 'Admin',
  //     path: '#',
  //   },
  //   {
  //     name: 'User',
  //     path: '/all-user',
  //   },
  //   {
  //     name: 'Logout',
  //     path: '/',
  //   },
  // ]:[{
  //   name: 'Logout',
  //   path: '/',
  // },];


  const getUsers=()=>{
    fetch(`${baseURL}/public/`)
    .then((res) => res.json())
    .then((data) => setUsers(data));
  }
  useEffect(() => {
    getUsers()
  }, []);
  const handleSelect = (option) => {
    setSelectedItem(option);
  };


  const handleDelete=(userId)=>{
    console.log('userId: ', userId);
    dispatch(removeUser(userId,()=>{
      getUsers()
      

    }))

  }
  return (
    <div>
      <HeaderGreen  />
      <div className="container mx-auto px-[20px] py-[40px]">
      <button  onClick={() => navigate(-1)} className='bg-white rounded-lg p-2'> <IoArrowBack />
      </button>
        <div className="rounded-[10px] border border-gray-400 w-full">
          <div className="p-3 border-b border-gray-400">
            <h1 className="font-bold text-[24px]">All User</h1>
          </div>
          <div className="py-1">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                {isAdmin &&  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>}
                  {/* Add more columns if needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Iterate over your user data and create rows */}
                {users.map((user) => (
                  user._id !== uid && (
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      {isAdmin && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "  onClick={()=>handleDelete(user._id)}>Delete</button>
                        </td>
                      )}
                      {/* Add more columns if needed */}
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
