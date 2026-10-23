import { getProducts } from '@/lib/fetcher'
import { Product } from '@/types/product';
import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const IncreaseProductList = async () => {
     const res = await getProducts();
     const filteredProduct = res?.filter((product: Product) => product?.change?.dir === 'up')
     const decendingFP = filteredProduct.sort((a, b) => b?.change?.pct - a?.change?.pct);
     // console.log("Increase:", filteredProduct);
     // console.log("Decending:", decendingFP);

     return (
          <div className='product-list grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                    decendingFP?.slice(0, 6)?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
               }
          </div>
     )
}

export default IncreaseProductList
