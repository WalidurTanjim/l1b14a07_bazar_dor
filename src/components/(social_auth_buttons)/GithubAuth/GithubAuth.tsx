"use client"
import { authClient } from '@/lib/auth-client'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const GithubAuth = () => {
     const [loading, setLoading] = useState<boolean>(false)

     const router = useRouter();

     const githubSignIn = async() => {
          try{
               setLoading(true);

               const { data: resData, error } = await authClient.signIn.social({
                    provider: 'github'
               })
               console.log("Gitauth res:", resData, error);

               if(resData?.redirect) {
                    toast.success("Account signin successfully")
                    router.push('/')
               }else{
                    toast.error("An unexpected error occured")
               }
          }catch(err: any) {
               console.error("Github signin error:", err);
               toast.error(err?.message || "An unexpected error occured")
          }finally {
               setLoading(false);
          }
     }

     return (
          <button
               type="button"
               disabled={loading}
               className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 px-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs font-medium text-gray-800"
               onClick={githubSignIn}
          >
               {
                    loading ? (
                         <>
                              <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                              <span>একাউন্ট ক্রীয়েট হচ্ছে</span>
                         </>
                    ) : (
                         <>
                              <svg
                                   className="w-4 h-4 text-black fill-current"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                              <span>GitHub দিয়ে চালিয়ে যান</span>
                         </>
                    )
               }
          </button>
     )
}

export default GithubAuth
