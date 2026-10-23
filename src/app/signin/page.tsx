export const instant = false

import SignInForm from "@/components/(signin)/SignInForm/SignInForm";
import GithubAuth from "@/components/(social_auth_buttons)/GithubAuth/GithubAuth";
import GoogleAuth from "@/components/(social_auth_buttons)/GoogleAuth/GoogleAuth";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const SignIn = () => {
     return (
          <div className="min-h-screen bg-[#f2f6f3] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
               {/* হেডার সেকশন */}
               <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                         সাইন ইন
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-600">
                         বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
               </div>

               {/* কার্ড সেকশন */}
               <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    {/* <form onSubmit={handleSubmit} className="space-y-4">
                         <div>
                              <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                                   ইমেইল
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="you@example.com"
                                   required
                                   className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-gray-400 bg-white"
                              />
                         </div>

                         <div>
                              <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                                   পাসওয়ার্ড
                              </label>
                              <div className="relative">
                                   <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="কমপক্ষে ৮ অক্ষর"
                                        className={`w-full px-3.5 py-2.5 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-1 placeholder:text-gray-400 bg-white ${passwordError
                                                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                  : "border-gray-200 focus:ring-emerald-600 focus:border-emerald-600"
                                             }`}
                                   />
                                   <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                   >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                   </button>
                              </div>
                              {passwordError && (
                                   <p className="mt-1 text-xs text-red-500 font-medium">
                                        {passwordError}
                                   </p>
                              )}
                         </div>

                         <button
                              type="submit"
                              className="w-full mt-2 py-2.5 bg-[#008744] hover:bg-[#00753b] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                         >
                              সাইন ইন
                         </button>
                    </form> */}
                    {/* SignInForm */}
                    <SignInForm />

                    {/* ডিভাইডার (অথবা) */}
                    <div className="relative my-6 text-center">
                         <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                         </div>
                         <span className="relative bg-white px-3 text-xs text-gray-500">
                              অথবা
                         </span>
                    </div>

                    {/* সোশ্যাল লগইন বাটন */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {/* Google Button */}
                         <GoogleAuth />

                         {/* GitHub Button */}
                         <GithubAuth />
                    </div>

                    {/* সাইন আপ লিঙ্ক */}
                    <div className="mt-6 text-center text-xs text-gray-700">
                         অ্যাকাউন্ট নেই?{" "}
                         <Link
                              href="/signup"
                              className="text-[#008744] font-medium hover:underline"
                         >
                              সাইন আপ করুন
                         </Link>
                    </div>
               </div>

               {/* ব্যাক লিঙ্ক */}
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

export default SignIn;