import { Category } from "@/types/category";

// API base url
const URL = process.env.NEXT_PUBLIC_API_URL;
console.log(URL)

// fetchApi
const fetchApi = async<T>(url: string): Promise<T> => {
     try{
          const res = await fetch(url);

          if(!res.ok) {
               throw new Error("Failed to fetch data");
          }

          return res.json();
     }catch(err) {
          console.error(err);
          throw err;
     }
}

// getCategories
export const getCategories = async(): Promise<Category[]> => {
     return fetchApi<Category[]>(`${URL}/api/bazardor/categories`);
}
