'use client'
import React, { useState } from 'react'
import { IoAlertSharp } from "react-icons/io5";

function Addresses() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermState, setSearchTermState] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownState, setShowDropdownState] = useState(false);
    const [search, setSearch] = useState('')
    const [searchState, setSearchState] = useState('')

    //for data states change
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [firstName, setFirstName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
    ];

    const countries = ["Canada", 'India', 'Japan', 'Amarican', 'Argentina'
        , 'United States',"China","Switzerland", 'South Africa',"Australia",
        "Brazil","Germany","France","Italy","Spain","United Kingdom","Russia",
    ];


    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
    );

    const filteredStates = indianStates.filter((state) =>
        state.toLowerCase().includes(searchState.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            selectedCountry,
            streetAddress,
            city,
            selectedState,
            pinCode,
            phone,
            email
        });

        // Clear the form after submission
        setFirstName("");
        setSearchTerm("");
        setSelectedCountry("");
        setStreetAddress("");
        setCity("");
        setSelectedState("");
        setPinCode("");
        setPhone("");
        setEmail("");
    };



    return (
        <>
            <div className=" lg:px-4 px-2 py-1">
                {/* <div className=''>
                    <h2 className=' text-[16px] mb-[16px]'>The following addresses will be used on the checkout page by default.</h2>
                    <h1 className='text-[20px] text-[#663634] mb-2 font-semibold'>Billing address</h1>
                    <p className=' text-[14px] text-[#663634]'>Add Billing address</p>
                    <h2 className=' text-[16px] mt-2'>You have not set up this type of address yet.</h2>
                </div> */}


                {/* <div className=''>
                    <h2 className=' text-[15px] mb-[15px]'>The following addresses will be used on the checkout page by default.</h2>
                    <h1 className='text-[20px] text-[#663634] mb-2 font-semibold'>Billing address</h1>
                    <p className=' text-[14px] text-[#663634] mb-2'>Edit Billing address</p>

                    <div className='flex flex-col gap-1 text-[#545353]'>
                        <h1 className='text-[15px] '>Shubham</h1>
                        <h1 className='text-[15px] '>dfg  gfdfg </h1>
                        <h1 className='text-[15px] '>Mumbai 400071</h1>
                        <h1 className='text-[15px] '>Maharashtra</h1>
                    </div>
                </div> */}

                <div className=' w-[100%]'>

                    <div className='border-2 border-[#663634] bg-[#FBF6F5]  md:px-4 py-3 flex items-center md:gap-10 xl:w-[760px] lg:w-[620px] '>
                        <div className=' md:p-4 p-1'>

                            <div className=' p-0.5 bg-[#663634] text-white rounded-full '>
                                <div className=' p-0.5 border-2 border-[#fff] rounded-full'>
                                    <p className=' text-[16px] rotate-180'><IoAlertSharp /></p>
                                </div>
                            </div>

                        </div>

                        <div className=''>
                            <h1 className=' md:text-[16px] text-[14px] font-semibold '>The following problems were found:</h1>
                            <div className='flex flex-col gap-1.5 mt-2 px-3 md:text-[14px] text-[12px] text-wrap text-[#663634]'>
                                <li className=' '>First name is a required field.</li>
                                <li className=' '>Street address is a required field.</li>
                                <li className=''>Town/City is a required field.</li>
                                <li className=' '>PIN Code is a required field.</li>
                                <li className=''>Phone is a required field.</li>
                                <li className=''>Email address is a required field.</li>
                            </div>

                        </div>
                    </div>


                    <h1 className='text-[20px] text-[#663634] mb-1 font-semibold'>Billing address</h1>
                    <div className=' border-2 border-t-4 border-[#663634] p-3 '>



                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className=''>
                                <label className="block text-sm font-medium">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="md:w-[60%] w-[95%] border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>


                            <div className=' relative'>
                                <label className="block text-sm font-medium">
                                    Country / Region *
                                </label>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    readOnly
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onFocus={() => setShowDropdown(true)}
                                    placeholder="Search or Select a Country"
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#663634] outline-[#663634]"
                                />
                                {showDropdown && (
                                    <div className=' relative border-x-2 border-t-2 rounded-t-md bg-white  shadow-md max-h-60'>
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className=" w-[95%] m-2 border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#663634]"
                                        />
                                        <ul className="absolute left-0 w-[100.2%] border-x-2 border-b-2 rounded-b-md bg-white  max-h-60 overflow-auto">

                                            {filteredCountries.map((country, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        setSearch(country)
                                                        setSelectedCountry(country);
                                                        setSearchTerm(country);
                                                        setShowDropdown(false);
                                                        setSearch('')
                                                    }}
                                                    className={`p-2 cursor-pointer  hover:bg-[#663634] hover:text-white ${selectedCountry == country ? "bg-[#663634] text-white" : ""}`}
                                                >
                                                    {country}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>




                            <div>
                                <label className="block text-sm font-medium">Street Address *</label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    value={streetAddress}
                                    onChange={(e) => setStreetAddress(e.target.value)}
                                    className="w-full border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Town / City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium">
                                    Select State
                                </label>
                                <input
                                    type="text"
                                    value={searchTermState}
                                    readOnly
                                    onChange={(e) => setSearchTermState(e.target.value)}
                                    onFocus={() => setShowDropdownState(true)}
                                    placeholder="Search or Select a Country"
                                    className="w-full border rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#663634] outline-[#663634]"
                                />
                                {showDropdownState && (
                                    <div className=' relative border-x-2 border-t-2 rounded-t-md bg-white  shadow-md max-h-60'>
                                        <input
                                            type="text"
                                            value={searchState}
                                            onChange={(e) => setSearchState(e.target.value)}
                                            className="w-[95%] m-2 border border-gray-300 rounded outline-[#663634] p-2 focus:outline-none focus:ring-1 focus:ring-black"
                                        />
                                        <ul className="absolute left-0 w-[100.2%] border-x-2 border-b-2 rounded-b-md bg-white  max-h-60 overflow-auto">

                                            {filteredStates.map((state, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        setSearchState(state)
                                                        setSelectedState(state);
                                                        setSearchTermState(state);
                                                        setShowDropdownState(false);
                                                        setSearchState('')
                                                    }}
                                                    className={`p-2 cursor-pointer  hover:bg-[#663634] hover:text-white ${selectedState == state ? "bg-[#663634] text-white" : ""}`}
                                                >
                                                    {state}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}


                            </div>


                            <div>
                                <label className="block text-sm font-medium">PIN Code *</label>
                                <input
                                    type="text"
                                    name="pinCode"
                                    value={pinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                    className="w-full border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Phone *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border rounded p-2 outline-[#663634]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className=" bg-[#663634] text-[14px] text-white py-2 md:w-[20%] w-[45%] text-wrap rounded "
                            >
                                SAVE ADDRESS
                            </button>
                        </form>





                    </div>
                </div >

            </div >
        </>
    )
}

export default Addresses