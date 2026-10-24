import { Category } from "@/types/category";
import { Product } from "@/types/product";

// API base url
const URL = process.env.NEXT_PUBLIC_API_URL;
console.log(URL)

// fetchApi
const fetchApi = async<T>(url: string): Promise<T> => {
     try{
          const res = await fetch(url, {
            cache: 'no-store', // ক্যাশ বন্ধ রাখা যাতে প্রতিবার ফ্রেশ ডাটা আনে
        });

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

// getProductsByCategory
export const getProductsByCategory = async(category: string): Promise<Product[]> => {
     return fetchApi(`${URL}/api/bazardor/products?category=${category}`);
}

// getProducts
export const getProducts = async(): Promise<Product[]> => {
     return fetchApi(`${URL}/api/bazardor/products`);
}

// getProductById
export const getProductById = async(id: number): Promise<Product> => {
     return fetchApi(`${URL}/api/bazardor/products/${id}`)
}
