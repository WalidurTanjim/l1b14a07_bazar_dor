import { getProducts } from '@/lib/fetcher'
import React, { Suspense } from 'react'
import MarqueeList from '../MarqueeList/MarqueeList'

const HMarquee = () => {
     return (
          <div>
               <Suspense fallback={<p>Marquee is loading...</p>}>
                    <MarqueeList />
               </Suspense>
          </div>
     )
}

export default HMarquee
