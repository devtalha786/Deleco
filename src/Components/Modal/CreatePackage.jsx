
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { createPackage, createRestaurant, getPackagesByRestaurant } from '../../store/actions/restaurantAction';

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(5, "Name should have at least 5 characters."),
  description: z.string().min(20, "Description should be at least 20 characters long."),
  allergens: z.string().nonempty("Allergens must be specified."),
  price: z.string().regex(/^\d+(\.\d+)?$/, "Price must be a number."), // Validates if the string is a positive number, allowing decimals
  leftAtStore: z.string().regex(/^\d+$/, "Left At Store must be a whole number."), // Validates if the string is a positive whole number
  pickupTime: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, "Pickup Time must be in 'YYYY-MM-DDTHH:MM' format."),
  

  pickup: z.string().nonempty("Pickup details must be provided."),
});


const CreatePackage = ({ isOpen, onClose ,restaurantId,setPackages}) => {
    const {user}=useSelector(state=>state.auth)

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    allergens: '',
    price: '',
    leftAtStore: '',
    pickupTime:'',

    pickup: '',
  });
  const [errors, setErrors] = useState({});

  const validateField = (field) => {
    try {
      formSchema.pick({ [field]: true }).parse({ [field]: formData[field] });
      setErrors(current => ({ ...current, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(current => ({ ...current, [field]: error.errors[0].message }));
        return false;
      }
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every(field => validateField(field));
    if (!isValid) return;
    console.log('formData: ', formData);
      let payload={
        name:formData.name,
        description:formData.description,
        allergens:formData.allergens,
        price:formData.price,
        leftAtStore:formData.leftAtStore,
        pickupTime:formData.pickupTime,
        pickup:formData.pickup,
        restaurantId:restaurantId


      }
    dispatch(createPackage(payload,restaurantId,()=>{

      dispatch(getPackagesByRestaurant(restaurantId,(packagesData)=>{
        setPackages(packagesData)
      }))
      onClose(); // Close the modal on successful form submission
    }));
  };
 
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center`}>
      <div className="relative bg-white p-8 rounded-md shadow-lg max-w-lg w-full h-[60vh] mx-auto overflow-y-auto">
        <button onClick={onClose} className="absolute top-3 right-3 text-lg text-gray-400 hover:text-gray-600">
          &#10005; {/* Unicode for a simple close (X) button */}
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div className="flex flex-col" key={key}>
              <label htmlFor={key} className="mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
              <input
                type={key.includes("price") || key.includes("Store") ? "number" : key.includes("Time") ? "datetime-local" : "text"}
                id={key}
                value={formData[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-md"
                required
              />
              {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
            </div>
          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
