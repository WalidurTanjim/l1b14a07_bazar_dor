import { getCategories } from '@/lib/fetcher'
import { Category } from '@/types/category';
import Link from 'next/link';
import NavLinksChild from '../NavLinksChild/NavLinksChild';

const NavLinks = async () => {
     const res = await getCategories();
     // console.log(res);

     return (
          <div className='px-4 md:px-6 lg:px-8 w-full max-w-7xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 pb-2'>
               {
                    res?.map((category: Category) => <NavLinksChild key={category?.id} category={category} />)
               }
          </div>
     )
}

export default NavLinks
