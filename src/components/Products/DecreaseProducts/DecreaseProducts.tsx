import React, { Suspense } from 'react'
import DecreaseProductList from '../DecreaseProductList/DecreaseProductList'
import ProductLoadingSkeleton from '@/components/Skeketons/ProductLoadingSkeleton/ProductLoadingSkeleton'

const DecreaseProducts = () => {
     return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
               <div>
                    <div className="py-5">
                         <h1 className="text-xl font-semibold text-slate-800">
                              <span className='text-red-600 me-2'>▼</span>
                              আজ দাম কমেছে
                         </h1>
                    </div>

                    <Suspense fallback={<ProductLoadingSkeleton />}>
                         <DecreaseProductList />
                    </Suspense>
               </div>
          </div>
     )
}

export default DecreaseProducts
