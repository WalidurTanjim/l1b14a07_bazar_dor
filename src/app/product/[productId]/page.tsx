import DynamicProductDetails from '@/components/Products/DynamicProductDetails/DynamicProductDetails';
import React, { Suspense } from 'react'

interface ProductDetailsParams {
     params: Promise<{
          productId: string
     }>
}

const ProductDetails = async({ params }: ProductDetailsParams) => {
     return (
          <div>
               <Suspense fallback={<p>Product is loading...</p>}>
                    <DynamicProductDetails params={params} />
               </Suspense>
          </div>
     )
}

export default ProductDetails
