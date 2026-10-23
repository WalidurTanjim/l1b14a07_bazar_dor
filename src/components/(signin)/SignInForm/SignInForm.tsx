"use client";

import React, { useState } from "react";
import { MoveLeft, Eye, EyeOff, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const SignInForm = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [passwordError, setPasswordError] = useState("");
     const [showPassword, setShowPassword] = useState(false);
     const [signInLoading, setSignInLoading] = useState<boolean>(false);

     const router = useRouter();
     const searchParams = useSearchParams();
     const callbackUrl = searchParams.get('callbackUrl') || "/";
     console.log("Signin pathname:", callbackUrl);

     const validatePassword = (value: string) => {
          const hasUppercase = /[A-Z]/.test(value);
          const hasLowercase = /[a-z]/.test(value);
          const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
          const hasMinLength = value.length >= 8;

          if (!value) {
               return "পাসওয়ার্ড প্রদান করুন";
          }

          if (!hasMinLength || !hasUppercase || !hasLowercase || !hasSpecialChar) {
               return "পাসওয়ার্ডে কমপক্ষে ৮টি অক্ষর, বড় হাতের অক্ষর, ছোট হাতের অক্ষর এবং একটি বিশেষ চিহ্ন (!@#$%^&*) থাকতে হবে";
          }

          return "";
     };

     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value;
          setPassword(val);
          if (val) {
               setPasswordError(validatePassword(val));
          } else {
               setPasswordError("");
          }
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const error = validatePassword(password);
          if (error) {
               setPasswordError(error);
               return;
          }
          setPasswordError("");

          const formData = new FormData(e.currentTarget);
          const formValues = Object.fromEntries(formData.entries()) as {
               email: string;
               password: string;
          };
          // console.log("Signin before auth:", formValues);

          // better-auth signIn validation
          try {
               setSignInLoading(true);

               const { data: resData, error: resError } = await authClient.signIn.email({
                    email: formValues?.email,
                    password: formValues?.password,
                    callbackURL: callbackUrl
               });

               // console.log("Signin after auth:", resData, resError);

               if (resData?.user) {
                    toast.success("Account signin successfully");
               } else {
                    console.error("Signin error:", resError);
                    toast.error(resError?.message as string);
                    return
               }
          } catch (err: any) {
               console.error("Signin error:", err);
               toast.error(err?.message || "An unexpected error occurred.")
          } finally {
               setSignInLoading(false);
          }
     };

     return (
          <form onSubmit={handleSubmit} className="space-y-4">
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

               {/* সাবমিট বাটন */}
               <button
                    type="submit"
                    disabled={signInLoading}
                    className="w-full mt-2 py-2.5 bg-[#008744] hover:bg-[#00753b] disabled:bg-opacity-80 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
               >
                    {signInLoading ? (
                         <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>সাইন ইন হচ্ছে...</span>
                         </>
                    ) : (
                         "সাইন ইন"
                    )}
               </button>
          </form>
     )
}

export default SignInForm
