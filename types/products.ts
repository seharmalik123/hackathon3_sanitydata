
export interface Product {
    _id: string;
    name:string;
    price: number;
    description: string;
    category: string;
    discountPercent: number;
    new: string;
    colors: string;
    sizes: string;
    image?:{
        asset : {
            _ref : string;
            _type : "image";
        },
        slug: {
            _type: "slug",
            current: string;
        };
} 

}