import DynamicProductDetails from '@/components/Products/DynamicProductDetails/DynamicProductDetails';
import ProductDetailsSkeleton from '@/components/Skeketons/ProductDetailsSkeleton/ProductDetailsSkeleton';
import React, { Suspense } from 'react'

interface ProductDetailsParams {
     params: Promise<{
          productId: string
     }>
}

const ProductDetails = async({ params }: ProductDetailsParams) => {
     return (
          <div>
               <Suspense fallback={<ProductDetailsSkeleton />}>
                    <DynamicProductDetails params={params} />
               </Suspense>
          </div>
     )
}

export default ProductDetails
