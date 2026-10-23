"use client"

import { Category } from "@/types/category";
import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLinksChild = ({ category }: { category: Category }) => {
     const pathname = usePathname();
     const isActive = pathname === `/category/${category?.slug}` ? true : false;

     return (
          <Link href={`/category/${category?.id}`} className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 text-sm md:text-base transition-colors ${isActive
               ? 'bg-emerald-50 text-emerald-600 font-semibold border border-emerald-200'
               : 'text-slate-700 hover:bg-gray-100'
               }`}>
               <span>{category?.icon}</span>
               <span className={isActive ? 'text-emerald-700' : 'text-slate-900'}>{category?.nameBn}</span>
          </Link>
     )
}

export default NavLinksChild
