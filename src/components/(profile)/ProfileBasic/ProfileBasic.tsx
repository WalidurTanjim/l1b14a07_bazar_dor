"use client"

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import Image from "next/image";

const ProfileBasic = () => {
     const { data: session } = authClient.useSession();
     const user = session?.user;
     console.log(user);

     // নামের প্রথম অক্ষর বের করার ফাংশন (যদি ইমেজ না থাকে)
     const getFirstLetter = (name?: string) => {
          if (!name) return "U";
          return name.charAt(0).toUpperCase();
     };

     // সাইন আউট হ্যান্ডলার (আপনার প্রয়োজন অনুযায়ী ফাংশনটি যুক্ত করতে পারেন)
     const handleSignOut = async () => {
          await authClient.signOut({
               fetchOptions: {
                    onSuccess: () => {
                         window.location.href = "/";
                    },
               },
          });
     };

     return (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
               {/* বাম পাশ: প্রোফাইল ছবি/অক্ষর এবং নাম-ইমেল */}
               <div className="flex items-center gap-4">
                    {/* প্রোফাইল ইমেজ অথবা নামের প্রথম অক্ষর */}
                    {user?.image ? (
                         <div className="w-16 h-16 rounded-2xl overflow-hidden relative shrink-0 border border-gray-100 bg-gray-50">
                              <Image
                                   src={user.image}
                                   alt={user?.name || "User"}
                                   fill
                                   className="object-cover"
                              />
                         </div>
                    ) : (
                         <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-sm">
                              {getFirstLetter(user?.name)}
                         </div>
                    )}

                    {/* নাম এবং ইমেল */}
                    <div>
                         <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                              {user?.name || "ব্যবহারকারী"}
                         </h2>
                         <p className="text-sm text-gray-500 mt-0.5">
                              {user?.email || "email@example.com"}
                         </p>
                    </div>
               </div>

               {/* ডান পাশ: সাইন আউট বাটন */}
               <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors ml-auto sm:ml-0"
               >
                    <LogOut className="w-4 h-4 rotate-180" />
                    <span>সাইন আউট</span>
               </button>
          </div>
     );
}

export default ProfileBasic;