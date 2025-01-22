import { groq } from "next-sanity";

export const allproducts = groq`*[_type == "products"]`;
export const fourProduct = groq`*[_type == "products"]`;

