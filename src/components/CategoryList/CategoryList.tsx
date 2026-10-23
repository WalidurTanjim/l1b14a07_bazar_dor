// import { getCategories, getProductsByCategory } from '@/lib/fetcher'
// import { Category } from '@/types/category'
// import { Product } from '@/types/product'
// import React from 'react'

// interface SlugParams {
//      params: Promise<{
//           slug: string
//      }>
// }

// // fetchAllCategories
// const fetchAllCategories = async(): Promise<Category[]> => {
//      const res = await getCategories();
//      return res;
// }

// // fetchCategoryProducts
// const fetchCategoryProducts = async(slug: string): Promise<Product[]> => {
//      const res = await getProductsByCategory(slug);
//      return res;
// }

// const CategoryList = async({ params }: SlugParams) => {
//      const { slug } = await params;
//      const categories = await fetchAllCategories();
//      const categoryProducts = await fetchCategoryProducts(slug);

//      const [existsCategory] = categories.filter((category: Category) => category?.slug === slug);
//      console.log(categories, existsCategory, categoryProducts)

//      return (
//           <div>
//                <h1>{slug}</h1>
//           </div>
//      )
// }

// export default CategoryList


import { getCategories, getProductsByCategory } from '@/lib/fetcher'
import { Category } from '@/types/category'
import { Product } from '@/types/product'
import React from 'react'

interface SlugParams {
     params: Promise<{
          slug: string
     }>
}

// fetchAllCategories
const fetchAllCategories = async (): Promise<Category[]> => {
     const res = await getCategories();
     return res;
}

// fetchCategoryProducts
const fetchCategoryProducts = async (slug: string): Promise<Product[]> => {
     const res = await getProductsByCategory(slug);
     return res;
}

const CategoryList = async ({ params }: SlugParams) => {
     const { slug } = await params;
     const categories = await fetchAllCategories();
     const categoryProducts = await fetchCategoryProducts(slug);

     const existsCategory = categories.find((category: Category) => category?.slug === slug);
     const totalProducts = categoryProducts.length;

     return (
          <div className="w-full py-4">
               <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex items-center gap-4 sm:gap-5">
                    {/* ক্যাটাগরি আইকন / ইমোজি */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f4f5f4] rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                         {existsCategory?.icon || '📦'}
                    </div>

                    {/* ক্যাটাগরি নাম ও পণ্যের সংখ্যা */}
                    <div className="space-y-1">
                         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                              {existsCategory?.nameBn || slug}
                         </h1>
                         <p className="text-gray-500 text-xs sm:text-sm font-medium">
                              {totalProducts} টি পণ্যের আজকের দাম ও পরিবর্তন
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default CategoryList