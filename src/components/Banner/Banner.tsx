"use client"

import Image from "next/image";
import hero_image from "@/assets/bazar-hero.png";
import { useEffect, useState } from "react";

const Banner = () => {
     const [currentDate, setCurrentDate] = useState("");

     useEffect(() => {
          const date = new Date().toLocaleDateString("bn-BD", {
               dateStyle: "full"
          });
          setCurrentDate(date);
     }, []);

     return (
          <section className="w-full max-w-7xl mx-auto bg-[#f8faf8] border border-gray-100 rounded-3xl p-6 md:p-10 lg:p-12 transition-all my-10">
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

                    {/* বাম পাশের কন্টেন্ট */}
                    <div className="flex-1 space-y-4 md:space-y-6 text-left">

                         {/* তারিখ ব্যাজ (Date Badge) */}
                         <div className="inline-block bg-[#e2f0e6] text-[#008744] text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full shadow-sm">{currentDate}</div>

                         {/* প্রধান শিরোনাম (Main Title) */}
                         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                              আজকের বাজারের দাম এক নজরে
                         </h1>

                         {/* সাবটাইটেল / বিবরণ (Description) */}
                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                         </p>

                         {/* অ্যাকশন বাটন (Action Button) */}
                         <div className="pt-2">
                              <button className="bg-[#008744] hover:bg-[#007038] text-white font-medium text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-md transition-all duration-200 active:scale-95">
                                   সব পণ্য দেখুন
                              </button>
                         </div>
                    </div>

                    {/* ডান পাশের ইমেজ (Hero Image) */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end items-center max-w-70 sm:max-w-85 md:max-w-95 lg:max-w-105">
                         <Image
                              src={hero_image}
                              alt="Bazar Hero Image"
                              width={400}
                              height={300}
                              className="w-full h-auto object-contain"
                              priority
                         />
                    </div>

               </div>
          </section>
     );
};

export default Banner;