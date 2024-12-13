import React from "react";
import ProductCard from "./ProductCard";
import LoadMoreProductsButton from "./buttons/LoadMoreProductsButton";

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
];
//TODO: bestseller products
export default function BestsellerProducts() {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-4 md:gap-6 md:max-w-[1200px]">
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
