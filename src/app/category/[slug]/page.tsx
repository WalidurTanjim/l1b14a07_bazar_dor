import CategoryList from '@/components/CategoryList/CategoryList'
import React, { Suspense } from 'react'

interface SlugParams {
     params: Promise<{
          slug: string
     }>
}

const CategoryProductPage = async({ params }: SlugParams) => {
     return (
          <div className='px-4 md:px-6 lg:px-8 py-10'>
               <Suspense fallback={<p>Category products loading...</p>}>
                    <CategoryList params={params} />
               </Suspense>
          </div>
     )
}

export default CategoryProductPage
