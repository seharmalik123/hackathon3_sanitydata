// "use client";

// import { client } from "@/sanity/lib/client";
// import { allproducts } from "@/sanity/lib/queries";
// import { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";


// const Allproduct = () =>{
//     const [products, setProducts]= useState<Product[]>([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             const fetchedProducts:Product[] = await client.fetch(allproducts);
//             setProducts(fetchedProducts);
//         }
//         fetchProducts();
//     }, []);

//     return(
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Clothes</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) =>(
//                     <div
//                     key={product._id}
//                     className="border rounded-lg shadow-mdv p-4 hover:shadow-lg transition duration-200"
//                     >
//                         <Link href={`/allproducts/${products.slug.current}`}>
//                         {product.image &&(
//                             <Image
//                             src={urlFor(product.image).url()}
//                             alt={product.name}
//                             width={200}
//                             height={200}
//                             className="w-full h-48 object-cover rounded-md"
//                             />
//                         )}
//                         <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
//                         <p className="text-gray-500 mt-2">
//                             {product.price ? `$${product.price}` : "price not available"}
//                         </p>
//                         </Link>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     )
// }
// export default Allproduct;

// src/app/allproducts/page.tsx

"use client"
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export default async function AllProductsPage() {
  // Fetch data from Sanity
  const products = await client.fetch(`*[_type == "products"]{_id, title, slug, image}`);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
     <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Clothes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: any) => (
        <div key={product._id} className="border rounded-lg p-4 shadow hover:shadow-md">
          {product.slug?.current ? (
            <Link href={`/allproducts/${product.slug.current}`}>
              <div>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded"
                  />
                )}
                <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              </div>
            </Link>
          ) : (
            <p className="text-red-500">Slug not available</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}
