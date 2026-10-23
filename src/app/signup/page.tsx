"use client";

import SignUpForm from "@/components/(signup)/SignUpForm/SignUpForm";
import GithubAuth from "@/components/(social_auth_buttons)/GithubAuth/GithubAuth";
import GoogleAuth from "@/components/(social_auth_buttons)/GoogleAuth/GoogleAuth";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
     return (
          <div className="min-h-screen bg-[#f2f6f3] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
               {/* header section */}
               <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                         অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-600">
                         বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
               </div>

               {/* field section */}
               <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    {/* SignUpForm */}
                    <SignUpForm />

                    {/* divider (অথবা) */}
                    <div className="relative my-6 text-center">
                         <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                         </div>
                         <span className="relative bg-white px-3 text-xs text-gray-500">
                              অথবা
                         </span>
                    </div>

                    {/* social signin buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {/* Google Button */}
                         <GoogleAuth />

                         {/* GitHub Button */}
                         <GithubAuth />
                    </div>

                    {/* signin page link */}
                    <div className="mt-6 text-center text-xs text-gray-700">
                         অ্যাকাউন্ট আছে?{" "}
                         <Link
                              href="/signin"
                              className="text-[#008744] font-medium hover:underline"
                         >
                              সাইন ইন করুন
                         </Link>
                    </div>
               </div>

               {/* back to home link */}
               <div className="mt-6 text-center">
                    <Link
                         href="/"
                         className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                    >
                         <MoveLeft className="w-3.5 h-3.5" />
                         <span>হোম পেজে ফিরে যান</span>
                    </Link>
               </div>
          </div>
     );
};

export default SignUp;