"use client";

import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, ShoppingBasket } from "lucide-react";

export default function NotFoundPage() {
     return (
          <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center px-4 py-12">
               <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-8 md:p-10 text-center shadow-sm">

                    {/* Floating Basket / Icon Graphic */}
                    <div className="relative w-24 h-24 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-inner">
                         <ShoppingBasket className="w-12 h-12 text-emerald-600 animate-bounce" />
                         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                              ৪০৪
                         </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                         পণ্য বা পেজটি পাওয়া যায়নি!
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                         আপনি যে পেজটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা লিংকটি সঠিক নয়। আজকের বাজারের সঠিক দাম দেখতে হোমপেজে ফিরে যান।
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                         {/* Go Home Button */}
                         <Link
                              href="/"
                              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#008240] hover:bg-[#006c35] text-white text-sm font-medium py-2.5 px-5 rounded-xl transition-colors shadow-sm"
                         >
                              <Home className="w-4 h-4" />
                              <span>হোম পেজে ফিরে যান</span>
                         </Link>

                         {/* Go Back Button */}
                         <button
                              type="button"
                              onClick={() => window.history.back()}
                              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium py-2.5 px-5 rounded-xl transition-colors"
                         >
                              <ArrowLeft className="w-4 h-4" />
                              <span>আগের পেজে ফিরুন</span>
                         </button>
                    </div>

                    {/* Footer Brand Tag */}
                    <div className="mt-10 pt-6 border-t border-gray-100">
                         <p className="text-xs text-gray-400">
                              বাজার দর — আপনার প্রতিদিনের নিত্যপণ্যের দামের তথ্য
                         </p>
                    </div>

               </div>
          </div>
     );
}