"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SortProductsPage() {
     const [sortOptions, setSortOptions] = useState<'default' | 'low-to-high' | 'high-to-low'>('default');
     console.log(sortOptions)

     return (
          <div className="w-full">
               {/* Outer Container matching the screenshot */}
               <div className="w-full bg-white flex items-center justify-between">

                    {/* Left side empty space matching layout */}
                    <div></div>

                    {/* Right side: Sorting label and dropdown */}
                    <div className="flex items-center gap-2.5">
                         <span className="text-sm font-normal text-gray-700">সাযান</span>

                         <div className="relative inline-block">
                              <select
                                   value={sortOptions}
                                   onChange={(e) => setSortOptions(e.target.value as 'default' | 'low-to-high' | 'high-to-low')}
                                   aria-label="সাযান"
                                   className="appearance-none bg-white border border-gray-300 rounded-lg py-1.5 pl-3 pr-8 text-sm font-normal text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 cursor-pointer"
                              >
                                   <option value="default">ডিফল্ট</option>
                                   <option value="low-to-high">দাম: কম থেকে বেশি</option>
                                   <option value="high-to-low">দাম: বেশি থেকে কম</option>
                              </select>

                              {/* Custom Chevron Icon */}
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-700">
                                   <ChevronDown className="w-4 h-4" />
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
}