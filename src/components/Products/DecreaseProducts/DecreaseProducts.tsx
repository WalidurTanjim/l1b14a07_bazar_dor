import React, { Suspense } from 'react'
import DecreaseProductList from '../DecreaseProductList/DecreaseProductList'

const DecreaseProducts = () => {
     return (
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
               <div>
                    <div className="py-5">
                         <h1 className="text-xl font-semibold text-slate-800">আজ দাম কমেছে</h1>
                    </div>

                    <Suspense fallback={<p>Products is loading...</p>}>
                         <DecreaseProductList />
                    </Suspense>
               </div>
          </div>
     )
}

export default DecreaseProducts
