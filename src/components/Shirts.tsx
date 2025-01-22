import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Iproducts[] = [
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
    img_url: "/images/pic14.png",
  },
  {
    title: "Black Striped T-shirt",
    id: 15,
    price: "$120",
    img_url: "/images/pic15.png",
    old_price: "$160",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/images/pic2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$180",
    img_url: "/images/pic3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/images/pic4.png",
  },
  {
    title: "VERTICAL STRIPED SHIRT",
    id: 5,
    price: "$130",
    img_url: "/images/pic5.png",
    old_price: "$232"
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 6,
    price: "$145",
    img_url: "/images/pic6.png",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 7,
    price: "$80",
    img_url: "/images/pic7.png",
  },
  
];

// Adding key prop in star array
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function CasualShirts() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-left ml-5">Casual</h1>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {product.map((data) => (
          // Add a unique "key" prop to the outermost element of the map
          <div key={data.id}>
            <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[20px]">
              <Image
                src={data.img_url}
                alt={data.title}
                className="w-full h-full rounded-[20px]"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="text-lg mt-2 font-bold">{data.title}</p>
              {/* Star array already contains unique keys */}
              {/* <p className="flex text-yellow-400">{star}</p> */}
              <div className="flex text-yellow-400">
              {/*Map stars correctly */}
              {star.map((icon, index)=>(
                <span key={index}>{icon}</span>
              ))}
             </div>
              <p className="font-bold mt-1">
                {data.price}
                <span className="text-gray-400 font-bold line-through">
                  {data.old_price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

