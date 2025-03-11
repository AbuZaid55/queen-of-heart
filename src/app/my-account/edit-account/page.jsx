import React from 'react'

function Account() {
    return (
        <>
            <div className=' w-[100%] p-3'>

                <div className=' border border-t-4 border-[#663634] p-3 xl:w-[800px] lg:w-[620px] '>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">First Name*</label>
                                <input  type="text" name="firstName" className="w-full p-2 border rounded border-[#663634] outline-[#663634]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Last Name*</label>
                                <input type="text" name="lastName" className="w-full p-2 border rounded border-[#663634] outline-[#663634]" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Display Name*</label>
                            <input type="text" name="displayName" className="w-full p-2 border mb-1 rounded border-[#663634] outline-[#663634]" required />
                            <p className="text-xs text-gray-500">This will be how your name is displayed in the account section and in the reviews.</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email Address*</label>
                            <input type="email" name="email" autoComplete='off' className="w-full p-2 border rounded border-[#663634] outline-[#663634]" required />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Password Change*</h3>
                            <label className="block text-sm font-medium">Current Password</label>
                            <input type="password" name="currentPassword" className="w-full p-2 border rounded border-[#663634] outline-[#663634]" />
                            <label className="block text-sm font-medium mt-2">New Password</label>
                            <input type="password" name="newPassword" className="w-full p-2 border rounded border-[#663634] outline-[#663634]" />
                            <label className="block text-sm font-medium mt-2">Confirm New Password</label>
                            <input type="password" name="confirmNewPassword" className="w-full p-2 border rounded border-[#663634] outline-[#663634]" />
                        </div>
                        <div className=' md:flex flex md:flex-row flex-col xl:w-[50%] w-[99%] gap-1'>
                            <input type="number" name="number" className=" border rounded border-[#663634] outline-[#663634]" />
                            <button type="submit" className=" bg-teal-500 text-white text-[14px] py-1 px-2 rounded hover:bg-teal-600">Change login number</button>
                        </div>
                        <button
                                type="submit"
                                className=" bg-[#663634] text-[14px] text-white py-2 md:w-[20%] w-[45%] text-wrap rounded "
                            >
                                SAVE Changes
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Account