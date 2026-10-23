import React from 'react'

const ProductDetailsSkeleton = () => {
     return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 space-y-6 animate-pulse">
               {/* ১. টপ হেডার সেকশন */}
               <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                         {/* প্রোডাক্ট ইমেজ */}
                         <div className="w-16 h-16 bg-gray-200 rounded-xl shrink-0" />
                         <div className="space-y-2">
                              {/* প্রোডাক্ট নাম */}
                              <div className="h-6 bg-gray-200 rounded-md w-44 sm:w-56" />
                              {/* সাব-টিন্ট বা ক্যাটাগরি */}
                              <div className="h-4 bg-gray-200 rounded-md w-28" />
                              {/* অতিরিক্ত বিবরণ */}
                              <div className="h-3.5 bg-gray-200 rounded-md w-52" />
                         </div>
                    </div>

                    {/* ডানপাশের আজকের দাম বক্স */}
                    <div className="w-full md:w-auto bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center space-y-2">
                         <div className="h-3 bg-gray-200 rounded w-16" />
                         <div className="h-7 bg-gray-200 rounded w-14" />
                         <div className="h-3 bg-gray-200 rounded w-20" />
                    </div>
               </div>

               {/* ২. দামের সারসংক্ষেপ সেকশন */}
               <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="h-5 bg-gray-200 rounded w-32" />

                    {/* ৩টি সামারি কার্ড (গ্রিড) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {Array.from({ length: 3 }).map((_, index) => (
                              <div key={index} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-3">
                                   <div className="h-3.5 bg-gray-200 rounded w-20" />
                                   <div className="h-6 bg-gray-200 rounded w-24" />
                                   <div className="h-3 bg-gray-200 rounded w-32" />
                              </div>
                         ))}
                    </div>
               </div>

               {/* ৩. বাজারভিত্তিক আজকের দাম টেবিল সেকশন */}
               <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="h-5 bg-gray-200 rounded-md w-48 mb-6" />

                    {/* টেবিল হেডার ও রো */}
                    <div className="space-y-3">
                         {/* টেবিল হেডার বার */}
                         <div className="h-10 bg-gray-100 rounded-lg w-full" />

                         {/* টেবিলের রো গুলোর জন্য স্কেলিটন */}
                         {Array.from({ length: 6 }).map((_, index) => (
                              <div key={index} className="h-12 bg-gray-50 rounded-lg w-full border border-gray-100 flex items-center justify-between px-4">
                                   <div className="h-4 bg-gray-200 rounded w-24" />
                                   <div className="h-4 bg-gray-200 rounded w-20" />
                                   <div className="h-4 bg-gray-200 rounded w-16" />
                                   <div className="h-4 bg-gray-200 rounded w-16" />
                                   <div className="h-4 bg-gray-200 rounded w-16" />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default ProductDetailsSkeleton