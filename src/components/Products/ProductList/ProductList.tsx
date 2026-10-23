import { getProducts } from '@/lib/fetcher'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/types/product';

const ProductList = async () => {
     const res = await getProducts();
     // console.log("Product:", res);

     return (
          <div>
               <div className="py-5">
                    <h1 className="text-xl font-semibold text-slate-800">সব পণ্য</h1>
                    <p className="text-slate-600">মোট {res?.length > 0 ? res?.length : 0} টি পণ্য লোড করা হয়েছে</p>
               </div>

               <div className='product-list grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                         res?.map((product: Product) => <ProductCard key={product?.id} product={product} />)
                    }
               </div>
          </div>
     )
}

export default ProductList
