import { getProducts } from '@/lib/fetcher'
import { Product } from '@/types/product';
import React from 'react'
import MarqueeText from 'react-marquee-text';

const fetchAllProducts = async(): Promise<Product[]> => {
     const res = await getProducts();
     return res;
}

const MarqueeList = async() => {
     const datas = await fetchAllProducts();
     // console.log(datas);

     return (
          <MarqueeText direction='right' duration={20} className='py-2 shadow'>
               {
                    datas?.map((product: Product) => {
                         return (
                              <div className='flex items-center space-x-1 mx-5'>
                                   <span>{product?.categoryIcon}</span>
                                   <h1>{product?.nameBn}</h1>
                                   <p>{product?.today} টাকা/{product?.unit === "kg" ? "কেজি" : product?.unit === "litre" ? "লিটার" : product?.unit === "dozon" ? "ডজন" : "পিস"}</p>
                                   <p>{product?.change?.dir === "up" ? <span className='text-red-600'>▲</span> : <span className='text-emerald-600'>▼</span>}</p>
                                   <p className={`${product?.change?.dir === "up" ? 'text-red-600' : 'text-emerald-600'}`}>{product?.change?.pct}%</p>
                              </div>
                         )
                    })
               }
          </MarqueeText>
     )
}

export default MarqueeList
