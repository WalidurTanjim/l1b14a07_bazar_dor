import React from 'react';

const ProductLoadingSkeleton = () => {
     return (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-pulse">
               {/* টপ সেকশন: ছবি এবং নাম */}
               <div className="flex items-center gap-4">
                    {/* ছবির জন্য স্কেলিটন */}
                    <div className="w-14 h-14 bg-gray-200 rounded-xl shrink-0" />
                    <div className="space-y-2 flex-1">
                         {/* প্রোডাক্টের নামের জন্য স্কেলিটন */}
                         <div className="h-5 bg-gray-200 rounded-md w-3/4" />
                         {/* ইউনিটের জন্য স্কেলিটন */}
                         <div className="h-3.5 bg-gray-200 rounded-md w-1/2" />
                    </div>
               </div>

               {/* বটম সেকশন: আজকের দাম এবং চেঞ্জ ইন্ডিকেটর */}
               <div className="flex items-end justify-between mt-5 pt-4 border-t border-gray-50">
                    <div className="space-y-1.5">
                         {/* 'আজকের দাম' টেক্সটের জন্য স্কেলিটন */}
                         <div className="h-3 bg-gray-200 rounded-md w-16" />
                         {/* দাম ও টাকার জন্য স্কেলিটন */}
                         <div className="h-6 bg-gray-200 rounded-md w-24" />
                    </div>

                    {/* আপ/ডাউন ব্যাজ স্কেলিটন */}
                    <div className="w-14 h-6 bg-gray-200 rounded-full" />
               </div>
          </div>
     );
};

export default ProductLoadingSkeleton;