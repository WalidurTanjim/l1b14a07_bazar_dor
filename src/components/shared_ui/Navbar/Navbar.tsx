"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [currentDate, setCurrentDate] = useState("");

     useEffect(() => {
          const date = new Date().toLocaleDateString("bn-BD", {
               dateStyle: "full"
          });
          setCurrentDate(date);
     }, []);
     console.log(currentDate);

     return (
          <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                         {/* logo & name (left side) */}
                         <div className="flex items-center gap-3">
                              <Link href="/" className="flex items-center gap-3 group">
                                   <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"><ShoppingCart className="w-6 h-6" />
                                   </div>
                                   <div>
                                        <span className="text-2xl font-bold text-gray-900 tracking-tight">বাজার দর</span>
                                        <p className="text-xs text-gray-500 font-medium">{currentDate}</p>
                                   </div>
                              </Link>
                         </div>

                         {/* signin & signup button for desktop (right side) */}
                         <div className="hidden md:flex items-center gap-4">
                              <Link href="/signin" className="text-gray-700 font-medium hover:text-emerald-600 transition-colors px-3 py-2">সাইন ইন</Link>
                              <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-all hover:shadow">সাইন আপ</Link>
                         </div>

                         {/* hamburger icon for small device */}
                         <div className="flex md:hidden">
                              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2 rounded-lg" aria-label="Toggle Menu">
                                   {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                              </button>
                         </div>
                    </div>
               </div>

               {/* small device dropdown menu */}
               {isOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fadeIn">
                         <div className="flex flex-col gap-2 pt-2">
                              <Link href="/signin" onClick={() => setIsOpen(false)} className="w-full text-center py-2.5 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">সাইন ইন</Link>
                              <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-all">সাইন আপ</Link>
                         </div>
                    </div>
               )}
          </header>
     );
};

export default Navbar;