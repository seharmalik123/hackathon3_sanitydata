'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Reviews";
import Tshirts from "@/components/Products";
import { BreadcrumbDemo } from "@/components/BreadcrumbCode";


// Adding key prop in star array
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

interface Iproducts {
    title:string,
    price: string,
    id: number,
    rating?: string,
    old_price?: string,
    img_url: string,
    img1:string,
    img2: string,
    img3: string, 
}
let product:Iproducts[] = [
    {
      title: "T-SHIRT WITH TAPE DETAILS",
      id: 1,
      price: "$120",
      img_url: "/images/pic1.png",
      img1:"/images/pic1.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png", 
    },
    {
      title: "SKINNY FIT JEANS",
      id: 2,
      price: "$240",
      img_url: "/images/pic2.png",
      old_price: "$260",
      img1:"/images/pic2.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png", 
      },
      {
      title: "CHECKERED SHIRT",
      id: 3,
      price: "$180",
      img_url: "/images/pic3.png",
      img1:"/images/pic3.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png",   
      },
      {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 4,
      price: "$130",
      img_url: "/images/pic4.png",
      old_price: "$160",
      img1:"/images/pic4.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png",  
      },
      {
        title: "VERTICAL STRIPED SHIRT",
        id: 5,
        price: "$212",
        img_url: "/images/pic5.png", 
        old_price: "$232",
        img1: "/images/pic5.png",
        img2: "/images/pic10.png",
        img3: "/images/pic11.png", 
      },
      {
          title: "COURAGE GRAPHIC T-SHIRT",
          id: 6,
          price: "$240",
          img_url: "/images/pic6.png",
          img1: "/images/pic6.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
          
        },
        {
          title: "LOOSE FIT BERMUDA SHORTS",
          id: 7,
          price: "$80",
          img_url: "/images/pic7.png",
          img1: "/images/pic7.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png",   
        },
        {
          title: "FADED SKINNY JEANS",
          id: 8,
          price: "$130",
          img_url: "/images/pic8.png",
          img1: "/images/pic8.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 9,
          price: "$260",
          old_price:"$300",
          img_url: "/images/pic9.png",
          img1: "/images/pic9.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 10,
          price: "$260",
          old_price: "$300",
          img_url: "/images/pic10.png",
          img1: "/images/pic10.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 11,
          price: "$230",
          old_price: "$300",
          img_url: "/images/pic11.png",
          img1: "/images/pic11.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 12,
          price: "$130",
          old_price: "$300",
          img_url: "/images/pic12.png",
          img1: "/images/pic12.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 13,
          price: "$130",
          old_price: "$300",
          img_url: "/images/pic13.png",
          img1: "/images/pic13.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "FADED SKINNY JEANS",
          id: 14,
          price: "$130",
          old_price: "$300",
          img_url: "/images/pic14.png",
          img1: "/images/pic14.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        {
          title: "One Life Graphic T-shirt",
          id: 15,
          price: "$130",
          old_price: "$300",
          img_url: "/images/pic15.png",
          img1: "/images/pic15.png",
          img2: "/images/pic10.png",
          img3: "/images/pic11.png", 
           
        },
        // {
        //   title: "FADED SKINNY JEANS",
        //   id: 16,
        //   price: "$130",
        //   img_url: "/images/pic8.png",
        //   img1: "/images/pic9.png",
        //   img2: "/images/pic10.png",
        //   img3: "/images/pic11.png", 
           
        // },
        // {
        //   title: "FADED SKINNY JEANS",
        //   id: 17,
        //   price: "$130",
        //   img_url: "/images/pic8.png",
        //   img1: "/images/pic9.png",
        //   img2: "/images/pic10.png",
        //   img3: "/images/pic11.png", 
           
        // },
        // {
        //   title: "FADED SKINNY JEANS",
        //   id: 18,
        //   price: "$130",
        //   img_url: "/images/pic8.png",
        //   img1: "/images/pic9.png",
        //   img2: "/images/pic10.png",
        //   img3: "/images/pic11.png", 
           
        // },

];

export default function Pro_Detail(){
  const  params = useParams();
  const id =  params.id  // Get dynamic id here 
  const item = product.find((item) => item.id === Number(id))
  if (!item) {
    return <h1>Product not found</h1>

  }
  return(
    <>
     <BreadcrumbDemo />
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-xl max-auto">
          {/*Left content */}
          <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
            {/* Images */}
            <Image src={item.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] rounded-[20px]" alt="productdetail" width={100} height={100} ></Image>
            <Image src={item.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]" alt="productdetail" width={100} height={100} ></Image>
            <Image src={item.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]" alt="productdetail" width={100} height={100} ></Image>
            </div>

            {/* Mid div */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
             <Image src={item.img1} alt="productdetail" className="w-full h-[95%] rounded-[20px]" width={100} height={100}></Image>
            </div>

           {/* Right content */}
           <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
            <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
            <div className="flex text-yellow-400">
              {/*Map stars correctly */}
              {star.map((icon, index)=>(
                <span key={index}>{icon}</span>
              ))}
             </div>

            <p className="font-bold mt-1">
              {item.price} <span className="text-gray-500 line-through ml-1">{item.old_price}</span>{" "}
              </p>
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
             </p>

            {/*Select color */}
            <div className="mt-5">
              <p className="text-gray-500">Select Colors</p>
              <div className="flex space-x-3 mt-2">
                <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center">
                  <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                  </div>
                <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center">
                  <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                  </div>
                <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center">
                  <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>

            {/* Choose Size */}
          <div className="mt-4">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-3 mt-2">
              <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                Small
              </div>
              <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                Medium
              </div>
              <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                Large
              </div>
              <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                X-Large
              </div>
            </div>
          </div>

            {/* Buttons */}
            <div className="flex justify-start items-center mt-7 space-x-4">
              <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                <Minus />
                1
                <Plus />
              </div>
              <Button className="bg-black text-white w-[300px]">Add to Cart</Button>

            </div>
           </div>
        </div>
        <Reviews/>
        <Tshirts />
        </>
    );
} 