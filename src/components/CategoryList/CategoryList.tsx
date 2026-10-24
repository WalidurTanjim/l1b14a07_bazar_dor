import { getCategories, getProductsByCategory } from '@/lib/fetcher'
import { Category } from '@/types/category'
import { Product } from '@/types/product'
import ProductCard from '../Products/ProductCard/ProductCard'
import SortProductsPage from '../SortProducts/SortProducts'
import Link from 'next/link'

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
     const invalidSlug = categories.find((category: Category) => category?.slug === slug);

     const existsCategory = categories.find((category: Category) => category?.slug === slug);
     const totalProducts = categoryProducts.length;


     return (
          <div className="w-full py-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
               <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex items-center gap-4 sm:gap-5">
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

               <div className="w-full mt-5">
                    {/* Outer Container matching the screenshot */}
                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">

                         {/* Left side empty space matching layout */}
                         <div></div>

                         {/* Right side: Sorting label and dropdown */}
                         <SortProductsPage />

                    </div>
               </div>

               <div className='py-8'>
                    <h1 className='text-slate-600'>মোট {totalProducts} টি পণ্য দেখানো হচ্ছে</h1>

                    <div>
                         {
                              invalidSlug === undefined ?
                                   <div className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-12 mx-auto">
                                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 border border-emerald-100 shadow-sm">🔍</div>

                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                             এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি!
                                        </h2>
                                        <p className="text-sm text-gray-500 max-w-md mb-6">
                                             আপনি যে ক্যাটাগরি বা লিংকটি খুঁজছেন তা খালি রয়েছে অথবা সঠিক নয়। বাজারের অন্যান্য পণ্যের সঠিক দাম দেখতে হোমপেজে ফিরে যান।
                                        </p>

                                        <Link href="/" className="inline-flex items-center justify-center bg-[#008744] hover:bg-[#00753b] text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors shadow-sm">হোম পেজে ফিরে যান</Link>
                                   </div> :
                                   <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                                        {
                                             categoryProducts?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
                                        }
                                   </div>
                         }
                    </div>
               </div>
          </div>
     )
}

export default CategoryList