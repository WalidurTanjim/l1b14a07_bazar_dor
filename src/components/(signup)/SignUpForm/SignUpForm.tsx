"use client"

import React, { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";

const SignUpForm = () => {
     const [password, setPassword] = useState("");
     const [repeatPassword, setRepeatPassword] = useState("");
     const [passwordError, setPasswordError] = useState("");
     const [repeatPasswordError, setRepeatPasswordError] = useState("");

     const router = useRouter();
     const pathname = usePathname();
     console.log("Signup pathname:", pathname);

     // password validation condition
     const validatePassword = (value: string) => {
          // Uppercase, Lowercase, Special Character and at least 8 characters
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
          const isLongEnough = value.length >= 8;

          if (!isLongEnough || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
               return "পাসওয়ার্ডে কমপক্ষে ৮টি অক্ষর, একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর এবং একটি বিশেষ চিহ্ন থাকতে হবে।";
          }
          return "";
     };

     // submit handler
     const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();

          // checking password validation
          const passErr = validatePassword(password);
          let matchErr = "";

          if (password !== repeatPassword) {
               matchErr = "পাসওয়ার্ড দুইটি মিলছে না।";
          }

          setPasswordError(passErr);
          setRepeatPasswordError(matchErr);

          if (passErr || matchErr) {
               return; // form won't submit if any error occured
          }

          // Sign up logic goes here
          const formData = new FormData(e.target);
          const formValues = Object.fromEntries(formData.entries()) as {
               name: string;
               email: string;
               password: string;
               repeat_password: string;
          };
          console.log("Signup before auth:", formValues);

          const { data: resData, error } = await authClient.signUp.email({
               name: formValues?.name,
               email: formValues?.email,
               password: formValues?.password
          })
          console.log("Signup auth:", resData, error);

          if (resData?.user) {
               toast.success("Account signup successfully");
               router.push('/');
          } else {
               console.error(error);
               throw error;
          }
     };

     return (
          <form onSubmit={handleSubmit} className="space-y-4">
               {/* নাম ইনপুট */}
               <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                         নাম
                    </label>
                    <input
                         type="text"
                         name="name"
                         placeholder="যেমন: রহিম উদ্দিন"
                         className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-gray-400 bg-white"
                    />
               </div>

               {/* ইমেইল ইনপুট */}
               <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                         ইমেইল
                    </label>
                    <input
                         type="email"
                         name="email"
                         placeholder="you@example.com"
                         className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-gray-400 bg-white"
                    />
               </div>

               {/* পাসওয়ার্ড ইনপুট */}
               <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                         পাসওয়ার্ড
                    </label>
                    <input
                         type="password"
                         name="password"
                         value={password}
                         onChange={(e) => {
                              setPassword(e.target.value);
                              if (passwordError) setPasswordError(validatePassword(e.target.value));
                         }}
                         placeholder="কমপক্ষে ৮ অক্ষর"
                         className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 placeholder:text-gray-400 bg-white ${passwordError
                              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-200 focus:ring-emerald-600 focus:border-emerald-600"
                              }`}
                    />
                    {passwordError && (
                         <p className="mt-1 text-xs text-red-500">{passwordError}</p>
                    )}
               </div>

               {/* পাসওয়ার্ড নিশ্চিত করুন ইনপুট */}
               <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                         পাসওয়ার্ড নিশ্চিত করুন
                    </label>
                    <input
                         type="password"
                         name="repeat_password"
                         value={repeatPassword}
                         onChange={(e) => {
                              setRepeatPassword(e.target.value);
                              if (repeatPasswordError && e.target.value === password) {
                                   setRepeatPasswordError("");
                              }
                         }}
                         placeholder="আবার লিখুন"
                         className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 placeholder:text-gray-400 bg-white ${repeatPasswordError
                              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-200 focus:ring-emerald-600 focus:border-emerald-600"
                              }`}
                    />
                    {repeatPasswordError && (
                         <p className="mt-1 text-xs text-red-500">{repeatPasswordError}</p>
                    )}
               </div>

               {/* submit button */}
               <button
                    type="submit"
                    className="w-full mt-2 py-2.5 bg-[#008744] hover:bg-[#00753b] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
               >
                    অ্যাকাউন্ট তৈরি করুন
               </button>
          </form>
     )
}

export default SignUpForm
