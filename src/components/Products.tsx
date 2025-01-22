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
      title: "Polo with Contrast Trims",
      id: 12,
      price: "$212",
      img_url: "/images/pic12.png", 
      old_price: "$242" 
    },
    {
        title: "Gradient Graphic T-shirt",
        id: 13,
        price: "$145",
        img_url: "/images/pic13.png",
        
      },
      {
        title: "Polo with Tipping Details",
        id: 14,
        price: "$180",
        img_url: "/images/pic14.png"  
      },
      {
        title: "Black Striped T-shirt",
        id: 15,
        price: "$120",
        img_url: "/images/pic15.png",
        old_price: "$150" 
         
      },
]
// Adding key prop in the star array
let star=[
  <FaStar key={1} />,
  <FaStar key={1} />,
  <FaStar key={1} />,
  <FaStar key={1} />,
  <FaStar key={1} />,
];

export default function Tshirts(){
  return (
    <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-xl max-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">YOU MIGHT ALSO LIKE</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
            {
                product.map((data) => {
                    return(
                        <div key={data.id}>
                           <Link href={`/Products/${data.id}`}>
                           <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                            <Image src={data.img_url} alt={data.title} 
                            className="w-full h-full rounded-[20px]"
                            width={100} height={100}></Image>
                        </div>
                           </Link>
                            <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                  {star.map((icon, index)=>(
                                    <span key={index}>{icon}</span>
                                  ))}
                                  </div>
                                <p className="font-bold mt-1">{data.price}<span className="text-gray-400 fon-bold line-through">{data.old_price}</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}