"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const SignUp = () => {
     const [password, setPassword] = useState("");
     const [repeatPassword, setRepeatPassword] = useState("");
     const [passwordError, setPasswordError] = useState("");
     const [repeatPasswordError, setRepeatPasswordError] = useState("");

     // পাসওয়ার্ড কন্ডিশন ভ্যালিডেশন ফাংশন
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

     const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();

          // পাসওয়ার্ড ভ্যালিডেশন চেক
          const passErr = validatePassword(password);
          let matchErr = "";

          if (password !== repeatPassword) {
               matchErr = "পাসওয়ার্ড দুইটি মিলছে না।";
          }

          setPasswordError(passErr);
          setRepeatPasswordError(matchErr);

          if (passErr || matchErr) {
               return; // এরর থাকলে ফর্ম সাবমিট হবে না
          }

          // Sign up logic goes here
          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData.entries()) as {
               name: string;
               email: string;
               password: string;
               repeat_password: string;
          };

          console.log("Signup before auth:", formValues);
     };

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
                         <button
                              type="button"
                              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 px-3 hover:bg-gray-50 transition-colors text-xs font-medium text-gray-800"
                         >
                              <svg className="w-4 h-4" viewBox="0 0 24 24">
                                   <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                   />
                                   <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                   />
                                   <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                   />
                                   <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                   />
                              </svg>
                              <span>Google দিয়ে চালিয়ে যান</span>
                         </button>

                         {/* GitHub Button */}
                         <button
                              type="button"
                              className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 px-3 hover:bg-gray-50 transition-colors text-xs font-medium text-gray-800"
                         >
                              <svg
                                   className="w-4 h-4 text-black fill-current"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                              <span>GitHub দিয়ে চালিয়ে যান</span>
                         </button>
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