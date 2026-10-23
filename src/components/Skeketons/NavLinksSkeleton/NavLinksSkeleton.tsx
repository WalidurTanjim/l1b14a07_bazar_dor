import React from 'react'

const NavLinksSkeleton = () => {
     // ক্যাটাগরির আইটেমগুলো দেখতে যেমন হয় (যেমন: ৮টি আইটেমের মতো একটি স্কেলিটন লিস্ট)
     return (
          <div className='grid gap-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 animate-pulse'>
               {Array.from({ length: 8 }).map((_, index) => (
                    <div 
                         key={index} 
                         className='flex items-center px-3 py-1 space-x-2 bg-gray-50 border border-gray-100 rounded-lg'
                    >
                         {/* আইকনের জন্য ছোট স্কেলিটন বক্স */}
                         <div className='w-6 h-6 bg-gray-200 rounded-md shrink-0' />
                         
                         {/* ক্যাটাগরি নামের জন্য টেক্সট স্কেলিটন */}
                         <div className='h-5 bg-gray-200 rounded-md w-16' />
                    </div>
               ))}
          </div>
     )
}

export default NavLinksSkeleton