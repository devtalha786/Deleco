import React from 'react';
import { HeaderGreen } from '../Layout/HeaderGreen';

export const AllUser = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Emily Davis', email: 'emily@example.com' },
  ];
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
      <HeaderGreen options={options} handleSelect={handleSelect} />
      <div className="container mx-auto px-[20px] py-[40px]">
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
                  {/* Add more columns if needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Iterate over your user data and create rows */}
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    {/* Add more columns if needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
