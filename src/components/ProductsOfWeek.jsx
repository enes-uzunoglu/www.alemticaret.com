import React from "react";
import ProductOfWeekCard from "./ProductOfWeekCard";

const cardCovers = [
  {
    coverImage: "https://picsum.photos/550/550",
    coverGender: "Woman",
  },
  {
    coverImage: "https://picsum.photos/550/400",
    coverGender: "Man",
  },
  {
    coverImage: "https://picsum.photos/550/401",
    coverGender: "Child",
  },
];

export default function ProductsOfWeek() {
  return (
    <div className="grid grid-cols-2 md:grid-rows-2 gap-2 md:gap-4 md:max-w-[1200px]">
      <ProductOfWeekCard
        className="row-span-2 col-span-1"
        cardCover={cardCovers[0]}
      />
      <ProductOfWeekCard className="col-span-1" cardCover={cardCovers[1]} />
      <ProductOfWeekCard
        className="col-start-2 row-start-2"
        cardCover={cardCovers[2]}
      />
    </div>
  );
}

{
  /* Satır 23: .map methodu işimi zorlaştırıyordu; çünkü map her bir itemi,
  yine array [{}] formatında döndürüyordu. Bana obje lazım. */
}
