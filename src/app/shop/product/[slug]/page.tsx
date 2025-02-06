import { client } from "@/sanity/lib/client";
import DetailPage from "@/components/product-page/Header/DetailPage";
import { notFound } from "next/navigation";
import ProductListSec from "@/components/Common/ProductListSec";
import Tabs from "@/components/product-page/tabs/page";
import { Product } from "../../../../../interface";
import BreadCrumbProduct from "@/components/product-page/BreadCrumbProduct";

export default async function ProductPage({ params }: any) {
  // Fetch the main product data
  const productQuery = `*[_type == "products" && _id == "${params.slug}" ][0]{
    sizes, price, name, category, description,
    "image": image.asset->url,
    "id": _id,
    colors, isNew
  }`;

  const productData: Product = await client.fetch(productQuery);

  if (!productData) {
    notFound(); // Trigger 404 if product not found
  }

  // Fetch 4 related products based on the category of the current product
  const relatedProductsQuery = `*[_type == "products" && category == "${productData.category}" && _id != "${productData.id}"][0...4]{
    sizes, price, name, description,
    "image": image.asset->url,
    "id": _id,
    colors, isNew
  }`;

  const relatedProducts: Product[] = await client.fetch(relatedProductsQuery);

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadCrumbProduct title={productData.name} />
        <section className="mb-11">
          <DetailPage ProductDetail={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProducts} />
      </div>
    </main>
  );
}