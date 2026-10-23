"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import ProfileDropdown from "@/components/ProfileDropdown/ProfileDropdown";
import Categories from "@/components/Categories/Categories";

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [currentDate, setCurrentDate] = useState("");

     useEffect(() => {
          const date = new Date().toLocaleDateString("bn-BD", {
               dateStyle: "full"
          });
          setCurrentDate(date);
     }, []);

     return (
          <header className="w-full bg-white sticky top-0 z-50 py-4">
               <div className="mb-3">
                    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="flex items-center justify-between h-20">

                              {/* logo & name (left side) */}
                              <div className="flex items-center gap-3">
                                   <Link href="/" className="flex items-center gap-3 group">
                                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105"><ShoppingCart className="w-6 h-6" />
                                        </div>
                                        <div>
                                             <span className="text-2xl font-bold text-gray-900 tracking-tight">বাজার দর</span>
                                             <p className="text-xs text-gray-500 font-medium">{currentDate}</p>
                                        </div>
                                   </Link>
                              </div>

                              {/* profile dropdown / signin buttons for desktop (right side) */}
                              <div className="hidden md:flex items-center gap-4">
                                   <ProfileDropdown />
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
                         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 space-y-3  animate-fadeIn">
                              <div className="flex flex-col items-center justify-center pt-2">
                                   {/* ছোট ডিভাইসের জন্য ProfileDropdown কম্পোনেন্ট রেন্ডার করা হলো */}
                                   <ProfileDropdown />
                              </div>
                         </div>
                    )}
               </div>

               <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <Suspense fallback={<p>Categories is loading...</p>}>
                         <Categories />
                    </Suspense>
               </div>
          </header>
     );
};

export default Navbar;