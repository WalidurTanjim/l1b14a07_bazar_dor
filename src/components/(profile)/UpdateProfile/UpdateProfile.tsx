"use client"

import React, { useState } from 'react'

const UpdateProfile = () => {
     const [name, setName] = useState("");

     const handleUpdate = (e: React.FormEvent) => {
          e.preventDefault();
          // আপনার আপডেটের লজিক এখানে যুক্ত করতে পারেন
          console.log("Updated Name:", name);
     };

     return (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm w-full max-w-7xl mx-auto mt-7">
               {/* হেডার বা শিরোনাম */}
               <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-6">
                    তথ্য
               </h2>

               {/* ফর্ম */}
               <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="space-y-2">
                         <label className="block text-sm font-medium text-gray-700">
                              নাম
                         </label>
                         <input 
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-gray-900"
                              placeholder=""
                         />
                    </div>

                    {/* আপডেট বাটন */}
                    <button 
                         type="submit"
                         className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm transition-colors text-center"
                    >
                         আপডেট
                    </button>
               </form>
          </div>
     )
}

export default UpdateProfile