
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: Promise<{slug: string}>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq `*[_type == "products" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,
        sizes,
        colors,
        description,
        } `,{slug}
    )
}

export default async function ProductPage({params}: ProductPageProps){
    const {slug} = await params;
    const products = await getProduct(slug)

    return(
        <div className="max-w-7xl- max-auto px-4">
            <div className="grid grid-col-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {products.image && (
                        <Image
                           src={urlFor(products.image).url()}
                           alt={products.name}
                           width={500}
                           height={500}
                           className="rounded-lg shadow-md"
                        />
                    )}

                </div>
           <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
                {products.name}
            </h1>
            <p className="text-2xl font-sans">
                {products.price}
            </p>
            <p className="text-2xl font-normal">
                {products.description}
            </p>
            <p className="text-2xl font-normal">
                {products.sizes}
            </p>
            <p className="text-2xl font-normal">
                {products.colors}
            </p>
          
            </div>
        </div>
        </div>
    )

}


// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import ProductDetailClient from './ProductDetailClient';


// export async function generateStaticParams() {
//   const products = await client.fetch(`*[_type == "products"]{slug}`);
//   return products.map((product: { slug: { current: string } }) => ({
//     slug: product.slug.current,
//   }));
// }

// export default async function ProductDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const product = await client.fetch(
//     `*[_type == "products" && slug.current == $slug][0]`,
//     { slug: params.slug }
//   );

//   if (!product) {
//     return <div className="text-center text-red-500 mt-10">Product not found</div>;
//   }

//   return (
//     <div className="p-6">
//       <ProductDetailClient product={product} />
//     </div>
//   );
// }


// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';


// interface Product {
//   title: string;
//   slug: { current: string };
//   image: any; // Define an appropriate type for the image if needed
//   description: string;
//   price: number;
//   sizes?: string[];
//   colors?: string[];
// }

// interface Params {
//   slug: string;
// }

// // Fetch product data at build time based on slug
// export async function generateStaticProps({ params }: { params: Params }) {
//   const { slug } = params; // Access slug parameter
//   const product = await client.fetch(
//     `*[_type == "products" && slug.current == $slug][0]`,
//     { slug }
//   );

//   // Return 404 if the product is not found
//   if (!product) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       product, // Pass product data to the page
//     },
//   };
// }

// //For generating dynamic paths based on slugs (static generation)
// export async function generateStaticParams() {
//   const products = await client.fetch(
//     `*[_type == "products"]{slug { current }}`
//   );

//   const paths = products.map((product: { slug: { current: string } }) => ({
//     params: { slug: product.slug.current }, // Generate paths based on slugs
//   }));

//   return {
//     paths,
//   };
// }

// export default function ProductDetailPage({ product }: { product: Product }) {
//    const router = useRouter();


//   // Safely log product sizes and colors after the data is available
//   console.log('Product Sizes:', product.sizes);
//   console.log('Product Colors:', product.colors);

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <Image
//         src={urlFor(product.image).url()}
//         alt={product.title}
//         width={400}
//         height={400}
//       />
//       <div>
//         <h3>Available Sizes:</h3>
//         <ul>
//           {product.sizes?.map((size) => (
//             <li key={size}>{size}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Available Colors:</h3>
//         <ul>
//           {product.colors?.map((color) => (
//             <li key={color}>{color}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
