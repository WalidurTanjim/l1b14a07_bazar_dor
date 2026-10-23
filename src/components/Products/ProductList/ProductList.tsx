import { getProducts } from '@/lib/fetcher'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/types/product';

const ProductList = async() => {
     const res = await getProducts();
     console.log("Product:", res);

     return (
          <div className='product-list grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                    res?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
               }
          </div>
     )
}

export default ProductList
