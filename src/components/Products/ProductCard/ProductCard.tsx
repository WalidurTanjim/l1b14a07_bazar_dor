import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductProps {
     product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
     const isUp = product.change.dir === "up";

     // ইউনিট বাংলায় দেখানোর জন্য হেল্পার ফাংশন
     const getUnitText = (unit: string) => {
          switch (unit) {
               case 'kg':
                    return 'প্রতি কেজি';
               case 'litre':
                    return 'প্রতি লিটার';
               case 'pcs':
                    return 'প্রতি পিস';
               default:
                    return `প্রতি ${unit}`;
          }
     };

     return (
          // ১. Link এ group ক্লাস যোগ করা হয়েছে
          <Link href={`/product/${product?.id}`} className="group block">
               <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200">
                    {/* টপ সেকশন: ছবি এবং নাম */}
                    <div className="flex items-center gap-4">
                         <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-3xl shrink-0 border border-gray-100">
                              {product.image}
                         </div>
                         <div>
                              {/* ২. group-hover:text-emerald-600 এবং transition যোগ করা হয়েছে */}
                              <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                                   {product.nameBn}
                              </h3>
                              <p className="text-sm text-gray-500 mt-0.5">
                                   {getUnitText(product.unit)}
                              </p>
                         </div>
                    </div>

                    {/* বটম সেকশন: আজকের দাম এবং চেঞ্জ ইন্ডিকেটর */}
                    <div className="flex items-end justify-between mt-5 pt-4 border-t border-gray-50">
                         <div>
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                   আজকের দাম
                              </p>
                              <p className="text-xl font-bold text-gray-900">
                                   {product.today} <span className="text-base font-medium text-gray-700">টাকা</span>
                              </p>
                         </div>

                         {/* আপ/ডাউন ব্যাজ */}
                         <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${isUp ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                              }`}>
                              <span>{isUp ? '▲' : '▼'}</span>
                              <span>{product.change.pct}%</span>
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default ProductCard;