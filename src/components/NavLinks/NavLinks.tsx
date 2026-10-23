import { getCategories } from '@/lib/fetcher'
import { Category } from '@/types/category';
import Link from 'next/link';

const NavLinks = async() => {
     const res = await getCategories();
     // console.log(res);

     return (
          <div className='flex items-center space-x-2'>
               {
                    res?.map((category: Category) => {
                         return (
                              <Link href={`/category/${category?.id}`} key={category?.nameBn} className='px-3 py-0.5 space-x-0.5 text-lg'>
                                   <span>{category?.icon}</span>
                                   <span>{category?.nameBn}</span>
                              </Link>
                         )
                    })
               }
          </div>
     )
}

export default NavLinks
