import { getProducts } from '@/lib/fetcher';
import { Product } from '@/types/product';
import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const DecreaseProductList = async () => {
     const res = await getProducts();
     const filteredProduct = res?.filter((product: Product) => product?.change?.dir === 'down')
     // console.log("Increase:", filteredProduct);

     return (
          <div className='product-list grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                    filteredProduct?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
               }
          </div>
     )
}

export default DecreaseProductList
