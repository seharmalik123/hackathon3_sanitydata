import Hero from "@/components/Hero";
import LogoSection from "@/components/Logo";
// import Products from "./Products/page";
// import Top_sell from "./Products/sell";
import Dress from "@/components/dress";
import CustomerCarousel  from "@/components/Carousel";
import Allproduct from "@/app/allproducts/page";

export default function Home() {
  // const products:Product[] = await sanityFetch({query: allproducts}) 
  return (
    <div>
    {/* <h1>Products</h1>
    <div className="grid grid-cols-3 gap-4">
      {
        products.map((products) =>(
        <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" 
        key={products._id}
        >
          <Image 
          src={products.imageUrl} 
          alt={products.name} 
          height={500} 
          width={500} />
          <h2 className="text-xl font-bold text-center">
            {products.name}
          </h2>
          <h2 className="text-sm text-center">
            {products.description}
          </h2>
          <h2 className="text-xl font-bold text-center">
            {products.price}
          </h2>
        </div>   
        ))
      }
    </div>*/}
     <Hero />
     <LogoSection />
     <Allproduct />
     {/* <Products /> */}
     {/* <Top_sell /> */}
     <Dress />
     <CustomerCarousel />
  
    </div>
  );
}
