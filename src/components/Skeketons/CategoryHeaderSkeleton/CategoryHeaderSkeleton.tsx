import React from 'react'

const CategoryHeaderSkeleton = () => {
     return (
          <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-pulse">
               <div className="flex items-center gap-4">
                    {/* আইকন বা ইমেজের জন্য স্কেলিটন */}
                    <div className="w-14 h-14 bg-gray-200 rounded-xl shrink-0" />

                    {/* টেক্সট সেকশনের জন্য স্কেলিটন */}
                    <div className="space-y-2 flex-1">
                         {/* বড় হেডিং বা ক্যাটাগরি নামের জন্য স্কেলিটন */}
                         <div className="h-6 bg-gray-200 rounded-md w-28 sm:w-36" />
                         {/* সাব-টেক্সট (যেমন: ৪টি পণ্যের আজকের দাম ও পরিবর্তন) এর জন্য স্কেলিটন */}
                         <div className="h-4 bg-gray-200 rounded-md w-48 sm:w-60" />
                    </div>
               </div>
          </div>
     )
}

export default CategoryHeaderSkeleton