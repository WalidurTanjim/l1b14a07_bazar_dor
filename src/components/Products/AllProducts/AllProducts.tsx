import { Suspense } from "react"
import ProductList from "../ProductList/ProductList"
import ProductLoadingSkeleton from "@/components/Skeketons/ProductLoadingSkeleton/ProductLoadingSkeleton"

const AllProducts = async () => {
     return (
          <div id="all-products" className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
               <Suspense fallback={<ProductLoadingSkeleton />}>
                    <ProductList />
               </Suspense>
          </div>
     )
}

export default AllProducts
