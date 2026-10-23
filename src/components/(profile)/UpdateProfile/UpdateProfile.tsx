"use client"

import { authClient } from '@/lib/auth-client';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const UpdateProfile = () => {
     const [name, setName] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);

     const handleUpdate = async(e: React.SubmitEvent<HTMLElement>) => {
          e.preventDefault();
          // আপনার আপডেটের লজিক এখানে যুক্ত করতে পারেন
          // console.log("Updated name:", name);

          try{
               setLoading(true);

               const { data: resData, error } = await authClient.updateUser({
                    name: name
               });

               // console.log("Updated successfully:", resData, error);

               if(resData?.status) {
                    setName('')
                    toast.success("Name updated successfully")
               }else {
                    console.error("Update profile error:", error);
                    toast.error(error?.message as string)
                    return
               }
          }catch(err) {
               console.error("Update profile error", err);
               toast.error("An unexpected error occurred.")
          }finally {
               setLoading(false);
          }
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
                    disabled={loading}
                    className="w-full mt-2 py-2.5 bg-[#008744] hover:bg-[#00753b] disabled:bg-opacity-80 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
               >
                    {loading ? (
                         <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>আপডেট হচ্ছে...</span>
                         </>
                    ) : (
                         "আপডেট"
                    )}
               </button>
               </form>
          </div>
     )
}

export default UpdateProfile