import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../store/actions/authAction';
import { getAllRestaurant, updateRestaurant } from '../../store/actions/restaurantAction';

const UpdateRestaurant = ({ isOpen, onClose, setRestaurants, selectedRestaurant}) => {
   const dispatch= useDispatch()
   const navigate=useNavigate()
   const {user}=useSelector(state=>state.auth)
   const [title,setTitle]=useState('')
   const [description,setDescription]=useState('')
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');

  
  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setImages(files);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the upload logic here

    
    const payload = {
           name: title,
            description,
            type,
            address: {
              street,
              street_number: streetNumber,
              city,
              country,
              postalCode: postalCode,
            },
            userName: user?.userName, // assuming this is a username logged from somewhere
          };

     dispatch(updateRestaurant(payload,selectedRestaurant?._id,()=>{
      toast.success('restaurant updated successfully')
      dispatch(getAllRestaurant((data) => {
        setRestaurants(data)
        onClose();
  },()=>{
    toast.error('token expirred.login again')
    dispatch( logout())
    navigate('/sign-in')

  }

));
  setTitle('');
    setDescription('');
    setImages([]);
    onClose();
     }))
  
  };

  useEffect(()=>{
    setTitle(selectedRestaurant?.name)
    setDescription(selectedRestaurant?.description)
    setCity(selectedRestaurant?.address?.city)
    setCountry(selectedRestaurant?.address?.country)
    setStreet(selectedRestaurant?.address?.street)
    setStreetNumber(selectedRestaurant?.address?.street_number)
    setPostalCode(selectedRestaurant?.address?.postalCode)
    setType(selectedRestaurant?.type)
  },[selectedRestaurant])
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md h-[80vh] overflow-y-scroll">
        <button onClick={onClose} className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700">
          X
        </button>
        <form onSubmit={handleSubmit} >
          <h2 className="text-lg font-semibold mb-4">Update Restaurant</h2>
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
            <label className="block text-gray-700 font-bold mb-2">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

       {/* Street and Street Number */}
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-6'>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Street Number</label>
            <input
              type="number"
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
            </div>

          </div>
         
         
          {/* City and Country */}
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-6'>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
            </div>

          </div>
         
        
         
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Postal Code</label>
            <input
              type="number"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          {/* <div className="mb-4">
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
          </div> */}
          <button type="submit" className="bg-[#009C76] text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
          Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
