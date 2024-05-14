import React, { useState } from 'react';

const DeleteRestaurant = ({ isOpen, onClose,onConfirm }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700">
          X
        </button>
        <div className="flex flex-col items-center">
          <img src="/assets/trash2.svg" alt="" />

          <h3 className="font-medium py-3">Are you sure you want to delete this?</h3>
          <div className="pt-4 flex gap-3">
            <button className="px-3 py-2 rounded-[10px] border bg-transparent" onClick={onClose}>
              Cancel
            </button>
            <button className="px-3 py-2 rounded-[10px] border bg-[#009C76] text-white" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRestaurant;
