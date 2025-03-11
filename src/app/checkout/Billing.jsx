'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Billing = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    street: '',
    city: '',
    state: 'Tamil Nadu', // Set default state to Tamil Nadu
    pincode: '',
    phone: '',
    email: ''
  });
  
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState({ country: false, state: false, pincode: false });
  const [searchTerm, setSearchTerm] = useState({ country: '', state: '', pincode: '' });
  const inputRefs = useRef({});
  const dropdownRefs = useRef({});

  const countries = [
    { 
      name: 'India', 
      states: [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
        'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry'
      ],
      pincodes: ['110001', '400001', '500001', '600001', '700001']
    },
    { 
      name: 'United States(USA)', 
      states: [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
        'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      pincodes: ['10001', '90001', '60601', '77001', '33101']
    },
    // Add more countries as needed
  ];

  useGSAP(() => {
    // Input animation setup for each field
    Object.keys(formData).forEach(field => {
      const input = inputRefs.current[field];
      if (!input) return;

      const handleFocus = () => {
        gsap.to(input, {
          borderColor: '#000000',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          '--placeholder-opacity': 0,
          duration: 0.3
        });
      };

      const handleBlur = () => {
        gsap.to(input, {
          borderColor: touched[field] && !formData[field] ? '#ff0000' : 
                      touched[field] && formData[field] ? '#00ff00' : '#e5e7eb',
          boxShadow: 'none',
          '--placeholder-opacity': 1,
          duration: 0.3
        });
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      };
    });
  }, [touched, formData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && !dropdownRefs.current[key].contains(event.target)) {
          setDropdownOpen(prev => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validateField = (name, value) => {
    switch(name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
      case 'phone':
        return /^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits';
      case 'pincode':
        const allPincodes = countries.flatMap(country => country.pincodes);
        return allPincodes.includes(value) ? '' : 'Invalid PIN code';
      default:
        return value.trim() ? '' : 'This is a required field';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    onFormDataChange(newFormData, { ...errors, [name]: error });
    
    const input = inputRefs.current[name];
    if (input) {
      gsap.to(input, {
        borderColor: error ? '#ff0000' : value ? '#00ff00' : '#e5e7eb',
        duration: 0.3
      });
    }
  };

  const validateAllFields = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    onFormDataChange(formData, newErrors);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      validateAllFields();
    }
  };

  const getFilteredOptions = (type, search) => {
    if (type === 'country') {
      return countries.filter(country => 
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    } else if (type === 'state') {
      return countries.flatMap(country => country.states).filter(state => 
        state.toLowerCase().includes(search.toLowerCase())
      );
    }
    return [];
  };

  const renderDropdown = (type) => (
    <div className="relative w-full" ref={el => dropdownRefs.current[type] = el}>
      <div
        onClick={() => setDropdownOpen(prev => ({ ...prev, [type]: !prev[type] }))}
        className="w-full p-5 bg-white border text-[0.8rem] flex justify-between items-center cursor-pointer rounded-md"
      >
        <span className={formData[type] ? 'text-black' : 'text-[#a29d9d]'}>
          {formData[type] || `Select a ${type === 'country' ? 'country / region...' : type === 'state' ? 'State' : 'PIN Code'}`}
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="text-[#4F2426]" />
      </div>
      
      {dropdownOpen[type] && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 ">
          <input
            type="text"
            value={searchTerm[type]}
            onChange={(e) => setSearchTerm(prev => ({ ...prev, [type]: e.target.value }))}
            onKeyPress={handleKeyPress}
            className="w-full p-3 border-b text-sm outline-none bg-white"
          />
          <div 
            data-lenis-prevent
            className="max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-2 
                     [&::-webkit-scrollbar-track]:bg-gray-100 
                     [&::-webkit-scrollbar-thumb]:bg-gray-300 
                     [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {getFilteredOptions(type, searchTerm[type]).map((option) => (
              <div
                key={type === 'country' ? option.name : option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    [type]: type === 'country' ? option.name : option
                  }));
                  setDropdownOpen(prev => ({ ...prev, [type]: false }));
                  setSearchTerm(prev => ({ ...prev, [type]: '' }));
                }}
              >
                {type === 'country' ? option.name : option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="lg:w-[40vw] md:w-[40vw] sm:w-[95vw] xl:w-[38vw] border border-white mt-4 p-4">
      <h1 className="text-[#4F2426] text-xl tracking-[0.2em] mb-2 p-4 font-semibold">
        BILLING & SHIPPING
      </h1>

      <form className="space-y-4 w-[95%] mx-auto">
        {/* Name field */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Name <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.name = el}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-[0.8rem] outline-none bg-white h-14"
          />
        </div>

        {/* Country dropdown */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Country/Region <span className="text-[#343030]">*</span>
          </label>
          {renderDropdown('country')}
        </div>

        {/* Street Address */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Street Address <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.street = el}
            type="text"
            name="street"
            placeholder="House number and street name"
            value={formData.street}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-[0.8rem] outline-none bg-white h-14 rounded-md"
          />
        </div>

        {/* Town/City */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Town/City <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.city = el}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-[0.8rem] outline-none bg-white h-14 rounded-md"
          />
        </div>

        {/* State dropdown */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            State <span className="text-[#343030]">*</span>
          </label>
          {renderDropdown('state')}
        </div>

        {/* PIN Code input field */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            PIN Code <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.pincode = el}
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-sm outline-none bg-white h-14 rounded-md"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Phone <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.phone = el}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-sm outline-none bg-white h-14 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[0.8rem] text-[#343030]">
            Email Address <span className="text-[#343030]">*</span>
          </label>
          <input
            ref={el => inputRefs.current.email = el}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border text-sm outline-none bg-white h-14 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Billing;
