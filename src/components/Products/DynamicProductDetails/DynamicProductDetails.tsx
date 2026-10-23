import { getProductById } from '@/lib/fetcher';
import { Product } from '@/types/product';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';

interface ProductDetailsParams {
     params: Promise<{
         productId: string
     }>
}

const getDynamicProductById = async (id: string): Promise<Product> => {
     const parseId = parseInt(id);
     const res = await getProductById(parseId);
     return res;
}

const DynamicProductDetails = async ({ params }: ProductDetailsParams) => {
     const { productId } = await params;
     const dynamicProduct = await getDynamicProductById(productId);

     // সর্বনিম্ন এবং সর্বাধিক দাম বের করার লজিক (সব বাজারের ডাটা থেকে)
     const allMins = dynamicProduct.markets.map((m) => m.min);
     const allMaxs = dynamicProduct.markets.map((m) => m.max);
     const minPrice = Math.min(...allMins);
     const maxPrice = Math.max(...allMaxs);

     // সবচেয়ে কম দামের বাজার এবং সবচেয়ে বেশি দামের বাজার খুঁজে বের করা
     const lowestMarketObj = dynamicProduct.markets.find((m) => m.min === minPrice);
     const highestMarketObj = dynamicProduct.markets.find((m) => m.max === maxPrice);

     // গড় দাম হিসাব করা (প্রতিটি বাজারের (min + max) / 2 এর গড়)
     const totalAvg = dynamicProduct.markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0);
     const overallAvgPrice = (totalAvg / dynamicProduct.markets.length).toFixed(2);

     return (
          <div className="min-h-screen bg-[#f4f5f4] py-8 px-4 sm:px-6 lg:px-8">
               <div className="max-w-7xl w-full mx-auto space-y-6">

                    {/* ১. টপ কার্ড (পণ্যের বিবরণ ও আজকের দাম) */}
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                         {/* বাম পাশ: আইকন, নাম ও দাম পরিবর্তনের বার্তা */}
                         <div className="flex items-center gap-5">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f4f5f4] rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                                   {dynamicProduct.image}
                              </div>
                              <div className="space-y-1">
                                   <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                                        {dynamicProduct.nameBn}
                                   </h1>
                                   <p className="text-gray-500 text-sm font-medium">
                                        প্রতি {dynamicProduct.unit === 'kg' ? 'কেজি' : dynamicProduct.unit} - {dynamicProduct.categoryNameBn}
                                   </p>
                                   <p className="text-gray-600 text-xs sm:text-sm pt-1">
                                        গতকালের তুলনায় আজ দাম {dynamicProduct.change.dir === 'up' ? 'বেড়েছে' : 'কমেছে'} - {dynamicProduct.change.pct} টাকা
                                   </p>
                              </div>
                         </div>

                         {/* ডান পাশ: আজকের দাম বক্স */}
                         <div className="w-full md:w-auto bg-[#f8faf8] border border-gray-200/70 rounded-xl px-6 py-4 text-center shrink-0">
                              <span className="text-xs text-gray-500 font-medium block mb-1">
                                   আজকের দাম
                              </span>
                              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-none">
                                   {dynamicProduct.today}
                              </div>
                              <div className="flex items-center justify-center gap-1.5 mt-2 text-xs sm:text-sm font-semibold text-emerald-600">
                                   <span>টাকা / কেজি</span>
                                   <span className="flex items-center text-red-500 font-bold">
                                        ▲ {dynamicProduct.change.pct}%
                                   </span>
                              </div>
                         </div>
                    </div>

                    {/* ২. দামের সারসংক্ষেপ সেকশন */}
                    <div className="space-y-3">
                         <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                              দামের সারসংক্ষেপ
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* সর্বনিম্ন দাম */}
                              <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-2">
                                   <span className="text-xs text-gray-500 font-medium block">
                                        সর্বনিম্ন দাম
                                   </span>
                                   <div className="text-2xl sm:text-3xl font-bold text-emerald-600">
                                        {minPrice} টাকা
                                   </div>
                                   <p className="text-xs text-gray-500 font-medium pt-1">
                                        সবচেয়ে কম দামের বাজার: {lowestMarketObj ? lowestMarketObj.market : ''}
                                   </p>
                              </div>

                              {/* সর্বাধিক দাম */}
                              <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-2">
                                   <span className="text-xs text-gray-500 font-medium block">
                                        সর্বাধিক দাম
                                   </span>
                                   <div className="text-2xl sm:text-3xl font-bold text-red-500">
                                        {maxPrice} টাকা
                                   </div>
                                   <p className="text-xs text-gray-500 font-medium pt-1">
                                        সবচেয়ে বেশি দামের বাজার: {highestMarketObj ? highestMarketObj.market : ''}
                                   </p>
                              </div>

                              {/* গড় দাম */}
                              <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-2">
                                   <span className="text-xs text-gray-500 font-medium block">
                                        গড় দাম
                                   </span>
                                   <div className="text-2xl sm:text-3xl font-bold text-emerald-600">
                                        {overallAvgPrice} টাকা
                                   </div>
                                   <p className="text-xs text-gray-500 font-medium pt-1">
                                        প্রতি কেজি-এর हिसाबে
                                   </p>
                              </div>
                         </div>
                    </div>

                    {/* ৩. বাজারভিত্তিক আজকের দাম টেবিল */}
                    <div className="space-y-3">
                         <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                              বাজারভিত্তিক আজকের দাম
                         </h2>
                         <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
                              <div className="overflow-x-auto">
                                   <table className="w-full text-left border-collapse">
                                        <thead>
                                             <tr className="border-b border-gray-200 text-gray-600 text-xs sm:text-sm font-semibold bg-gray-50/50">
                                                  <th className="py-4 px-6">বাজার</th>
                                                  <th className="py-4 px-6">বিভাগ</th>
                                                  <th className="py-4 px-6">সর্বনিম্ন</th>
                                                  <th className="py-4 px-6">সর্বাধিক</th>
                                                  <th className="py-4 px-6 text-right">গড়</th>
                                             </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-800 text-sm font-medium">
                                             {dynamicProduct.markets.map((item, index) => {
                                                  const avgMarketPrice = ((item.min + item.max) / 2).toFixed(2);
                                                  return (
                                                       <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                                                            <td className="py-4 px-6 text-gray-900 font-semibold">
                                                                 {item.market}
                                                            </td>
                                                            <td className="py-4 px-6 text-gray-600">
                                                                 {item.division}
                                                            </td>
                                                            <td className="py-4 px-6 text-gray-800">
                                                                 {item.min} টাকা
                                                            </td>
                                                            <td className="py-4 px-6 text-gray-800">
                                                                 {item.max} টাকা
                                                            </td>
                                                            <td className="py-4 px-6 text-right font-semibold text-gray-900">
                                                                 {avgMarketPrice} টাকা
                                                            </td>
                                                       </tr>
                                                  );
                                             })}
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default DynamicProductDetails;