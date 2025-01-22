import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";



interface Iproducts{
    title:string,
    price: string,
    id: number,
    rating?: string,
    old_price?: string,
    img_url: string  
}
let product:Iproducts[] = [
    {
      title: "STRIPED SHIRT",
      id: 5,
      price: "$212",
      img_url: "/images/pic5.png", 
      old_price: "$232" 
    },
    {
        title: "GRAPHIC T-SHIRT",
        id: 6,
        price: "$240",
        img_url: "/images/pic6.png",
        
      },
      {
        title: "LOOSE FIT SHORTS",
        id: 7,
        price: "$80",
        img_url: "/images/pic7.png"  
      },
      {
        title: "SKINNY JEANS",
        id: 8,
        price: "$130",
        img_url: "/images/pic8.png",
         
      },
      
]
// Add key prop in the star array
let star = [
<FaStar key={1} />,
<FaStar key={2} />,
<FaStar key={3} />,
<FaStar key={4} />,
<FaStar key={5} />,
];

export default function Top_sell(){
  return (
    <>
    <div className="w-full h-full sm:h-[500px] mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 pt-10 ">
            {
                product.map((data) => {
                    return(
                        <div key={data.id} className="flex-shrink-0">
                           <Link href={`/Products/${data.id}`}>
                           <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                            <Image 
                            src={data.img_url} 
                            alt={data.title} 
                            className="w-full h-full rounded-[20px]"
                            width={100} 
                            height={100}
                            />

                        </div>
                      </Link>
                            <div className="pl-2">
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                  {star.map((icon, index)=>(
                                    <span key={index}>{icon}</span>
                                  ))}
                                  </div>
                                <p className="font-bold mt-1">
                                  {data.price}{" "}
                                  <span className="text-gray-400 fon-bold line-through">
                                    {data.old_price}
                                  </span>
                                  </p>
                            </div>
                        </div>
                    );
                })}
                </div>
              </div>
              <div className="flex justify-center items-start mt-5">
                <Link href="/casual">
                <Button variant={"outline"} className="sm:mt-0 w-[80%] sm:w-[200px] rounded-[20px]">
                  View all
                </Button>
              </Link>
            </div>
        </>
  );
}