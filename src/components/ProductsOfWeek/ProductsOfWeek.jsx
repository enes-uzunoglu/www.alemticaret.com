import React from "react";
import ProductOfWeekCard from "./ProductOfWeekCard";

const cardCovers = [
  {
    coverImage: "https://picsum.photos/550/800",
    coverGender: "Woman",
    rowSpan: "row-span-2", // Kadın kartı 1. ve 2. satırı kapsayacak
    colStart: "col-span-1", // Kadın kartı 1. sütunda
  },
  {
    coverImage: "https://picsum.photos/550/801",
    coverGender: "Man",
    rowSpan: "", // Erkek kartı 1 satırda olacak
    colStart: "col-start-2", // 2. sütunda
  },
  {
    coverImage: "https://picsum.photos/550/802",
    coverGender: "Child",
    rowSpan: "", // Çocuk kartı 1 satırda olacak
    colStart: "col-start-2", // 2. sütunda
  },
];

export default function ProductsOfWeek() {
  return (
    <div className="max-w-[280px] md:max-w-[480px] mx-auto flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-2  md:px-0">
      {/* Başlık ve açıklama */}
      <div className="col-span-1 sm:col-span-2 text-center mb-4">
        <h2 className="text-3xl font-semibold mb-2">PRODUCTS OF THE WEEK</h2>
        <p className="text-secondaryTextColor mb-8">
          Explore the best products of the week for every category.
        </p>
      </div>

      {/* Kartlar */}
      {cardCovers.map((card, index) => (
        <div
          key={index}
          className={`flex justify-center items-start ${card.rowSpan} ${card.colStart}`}
        >
          <ProductOfWeekCard cardCover={card} />
        </div>
      ))}
    </div>
  );
}
