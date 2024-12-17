import React from "react";
import { ProductCard } from "./index.js";
import { LoadMoreProductsButton } from "../buttons";

const bestSeller = [
  {
    image: "https://picsum.photos/300/360",
    title: "Ürün Başlığı 1",
    description: "Ürün Açıklaması 1",
    oldPrice: "₺100",
    newPrice: "₺80",
  },
  {
    image: "https://picsum.photos/300/361",
    title: "Ürün Başlığı 2",
    description: "Ürün Açıklaması 2",
    oldPrice: "₺150",
    newPrice: "₺120",
  },
  {
    image: "https://picsum.photos/300/362",
    title: "Ürün Başlığı 3",
    description: "Ürün Açıklaması 3",
    oldPrice: "₺200",
    newPrice: "₺160",
  },
  {
    image: "https://picsum.photos/300/363",
    title: "Ürün Başlığı 4",
    description: "Ürün Açıklaması 4",
    oldPrice: "₺250",
    newPrice: "₺200",
  },
  {
    image: "https://picsum.photos/300/364",
    title: "Ürün Başlığı 5",
    description: "Ürün Açıklaması 5",
    oldPrice: "₺300",
    newPrice: "₺240",
  },
  {
    image: "https://picsum.photos/300/365",
    title: "Ürün Başlığı 6",
    description: "Ürün Açıklaması 6",
    oldPrice: "₺350",
    newPrice: "₺280",
  },
  {
    image: "https://picsum.photos/300/366",
    title: "Ürün Başlığı 7",
    description: "Ürün Açıklaması 7",
    oldPrice: "₺400",
    newPrice: "₺320",
  },
  {
    image: "https://picsum.photos/300/367",
    title: "Ürün Başlığı 8",
    description: "Ürün Açıklaması 8",
    oldPrice: "₺450",
    newPrice: "₺360",
  },
];

export default function BestSellerProducts() {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-4 md:gap-6 ">
      <h2 className="h2">BESTSELLER PRODUCTS</h2>
      <p className="p1 text-secondaryTextColor">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {bestSeller.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      <LoadMoreProductsButton />
    </div>
  );
}
