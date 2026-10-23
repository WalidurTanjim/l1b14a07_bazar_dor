// "use client"

// import { authClient } from "@/lib/auth-client"
// import Link from "next/link";

// const ProfileDropdown = () => {
//      const { data: session } = authClient.useSession();
//      const user = session;
//      console.log(session);

//      return (
//           <>
//                {
//                user ? (<>
//                     <h1>hi</h1>
//                </>) : (<>
//                          <Link href = "/signin" className = "text-gray-700 font-medium hover:text-emerald-600 transition-colors px-3 py-2">সাইন ইন</Link>
//                          <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-all hover:shadow">সাইন আপ</Link>
//                     </>)
//                }
//           </>
//      )
// }

// export default ProfileDropdown

"use client";

import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { User, LogOut } from "lucide-react";

const ProfileDropdown = () => {
     const { data: session } = authClient.useSession();
     const [isOpen, setIsOpen] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);

     const user = session?.user;

     // ক্লিক আউটসাইড (Click Outside) হ্যান্ডেল করার লজিক
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node)
               ) {
                    setIsOpen(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, []);

     const handleSignOut = async () => {
          await authClient.signOut();
          setIsOpen(false);
     };

     // নামের প্রথম অক্ষর বের করার ফাংশন
     const getInitial = (name?: string) => {
          if (!name) return "U";
          return name.charAt(0).toUpperCase();
     };

     return (
          <div className="relative inline-block text-left" ref={dropdownRef}>
               {user ? (
                    <>
                         {/* প্রোফাইল ট্রিগার বাটন */}
                         <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-gray-100/80 transition-colors focus:outline-none"
                         >
                              {/* ইউজার ইমেজ অথবা নামের প্রথম অক্ষর */}
                              {user.image ? (
                                   <Image
                                        src={user.image}
                                        alt={user.name || "User Avatar"}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-2xl object-cover"
                                   />
                              ) : (
                                   <div className="w-7 h-7 rounded-2xl bg-gray-200 text-gray-800 font-semibold flex items-center justify-center text-base">
                                        {getInitial(user.name)}
                                   </div>
                              )}

                              {/* নামের প্রথম অংশ ও ডাউন অ্যারো */}
                              <span className="text-gray-900 font-medium text-base flex items-center gap-1.5">
                                   {user.name?.split(" ")[0]}
                                   <span className="text-[10px] text-gray-500 transform translate-y-px">
                                        ▼
                                   </span>
                              </span>
                         </button>

                         {/* প্রোফাইল ড্রপডাউন মোডাল (স্ক্রিনশট অনুযায়ী ১০০% সেম ডিজাইন) */}
                         {isOpen && (
                              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 z-50 transition-all animate-in fade-in zoom-in-95 duration-150">
                                   {/* ইউজার ইনফরমেশন */}
                                   <div className="mb-5">
                                        <h3 className="text-lg font-medium text-gray-900 tracking-tight leading-snug">
                                             {user.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-normal truncate mt-0.5">
                                             {user.email}
                                        </p>
                                   </div>

                                   {/* লিঙ্ক এবং অপশনসমূহ */}
                                   <div className="space-y-3">
                                        {/* আমার প্রোফাইল লিঙ্ক */}
                                        <Link
                                             href="/profile"
                                             onClick={() => setIsOpen(false)}
                                             className="flex items-center gap-3 text-gray-800 font-medium text-base hover:text-emerald-600 transition-colors py-1 group"
                                        >
                                             <User className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                                             <span>আমার প্রোফাইল</span>
                                        </Link>

                                        {/* সাইন আউট বাটন */}
                                        <button
                                             onClick={handleSignOut}
                                             className="w-full flex items-center gap-3 text-[#ef4444] font-medium text-base hover:text-red-600 transition-colors py-1"
                                        >
                                             <LogOut className="w-5 h-5 rotate-180 text-[#ef4444]" />
                                             <span>সাইন আউট</span>
                                        </button>
                                   </div>
                              </div>
                         )}
                    </>
               ) : (
                    /* লগইন না থাকলে দেখানোর জন্য সাইন ইন ও সাইন আপ বাটন */
                    <div className="flex items-center gap-3">
                         <Link
                              href="/signin"
                              className="text-gray-700 font-medium hover:text-emerald-600 transition-colors px-3 py-2 text-sm sm:text-base"
                         >
                              সাইন ইন
                         </Link>
                         <Link
                              href="/signup"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow text-sm sm:text-base"
                         >
                              সাইন আপ
                         </Link>
                    </div>
               )}
          </div>
     );
};

export default ProfileDropdown;
