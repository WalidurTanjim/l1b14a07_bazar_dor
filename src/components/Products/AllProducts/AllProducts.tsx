import { Suspense } from "react"
import ProductList from "../ProductList/ProductList"
import ProductLoadingSkeleton from "@/components/Skeketons/ProductLoadingSkeleton/ProductLoadingSkeleton"

const AllProducts = async () => {
     return (
          <div id="all-products" className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
               <div>
                    <div className="py-5">
                         <h1 className="text-xl font-semibold text-slate-800">সব পণ্য</h1>
                         <p className="text-slate-600">মোট ০ টি পণ্য লোড করা হয়েছে</p>
                    </div>

                    <Suspense fallback={<ProductLoadingSkeleton />}>
                         <ProductList />
                    </Suspense>
               </div>
          </div>
     )
}

export default AllProducts
