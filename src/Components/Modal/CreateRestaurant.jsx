import React, { useState } from 'react';

const CreateRestaurant = ({ isOpen, onClose, setTitle, title, description, setDescription, images, setImages }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the upload logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Images:', images);
    // Clear input fields after submission
    setTitle('');
    setDescription('');
    setImages([]);
    onClose();
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700">
          X
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Create Restaurant</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Upload Images</label>
            <input type="file" onChange={handleImageChange} className="w-full" multiple accept="image/*" required />
          </div>
          <div className="flex flex-wrap">
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Image ${index + 1}`}
                className="w-20 h-20 object-cover mr-2 mb-2 rounded"
              />
            ))}
          </div>
          <button type="submit" className="bg-[#009C76] text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurant;
