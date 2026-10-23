"use client"
import { getCategories } from "@/lib/fetcher"
import { Category } from "@/types/category";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "../NavLinks/NavLinks";

const Categories = () => {
     const [categories, setCategories] = useState<Category[]>([]);

     useEffect(() => {
          const fetchCategory = async () => {
               try {
                    const res = await getCategories();
                    setCategories(res);
               } catch (err: any) {
                    console.error("Category error:", err?.message)
                    throw err;
               }
          }
          fetchCategory();
     }, []);

     return (
          <div className="flex items-center space-x-2">
               {
                    categories?.map((category) => {
                         return (
                              <Link href={`/category/${category?.slug}`} key={category?.id} className="flex space-x-1 px-2 py-0.5 rounded-md cursor-pointer">
                                   <p>{category?.icon}</p>
                                   <h1>{category?.nameBn}</h1>
                              </Link>
                         )
                    })
               }
          </div>
     )
}

export default Categories
