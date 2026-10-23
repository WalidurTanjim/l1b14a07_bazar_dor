import React, { Suspense } from 'react'
import IncreaseProductList from '../IncreaseProductList/IncreaseProductList'
import ProductLoadingSkeleton from '@/components/Skeketons/ProductLoadingSkeleton/ProductLoadingSkeleton'

const IncreaseProducts = () => {
     return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
               <div>
                    <div className="py-5">
                         <h1 className="text-xl font-semibold text-slate-800">আজ দাম বেড়েছে</h1>
                    </div>

                    <Suspense fallback={<ProductLoadingSkeleton />}>
                         <IncreaseProductList />
                    </Suspense>
               </div>
          </div>
     )
}

export default IncreaseProducts
