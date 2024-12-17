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
    <div className="grid md:grid-cols-2 rows-2s">
      <div className="flex gap-2 justify-center md:grid md:max-w-[200px] md:col-start-2 md:row-start-1 md:justify-center">
        <span className="md:block">Top</span>
        <span className="md:block">Product</span>
        <span className="md:block">Of</span>
        <span className="md:block">The</span>
        <span className="md:block">Week</span>
      </div>

      <div className="flex flex-col gap-2 md:flex-row max-w-[700px]">
        <ProductOfWeekCard cardCover={cardCovers[0]} />
        <div className="flex flex-col justify-center gap-2">
          <ProductOfWeekCard cardCover={cardCovers[1]} />
          <ProductOfWeekCard cardCover={cardCovers[2]} />
        </div>
      </div>
    </div>
  );
}
