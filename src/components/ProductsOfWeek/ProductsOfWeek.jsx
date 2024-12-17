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
    //TODO: OLMADI:( CENTER OLMADI
    <div className="grid md:grid-cols-2 rows-2s  ">
      <div class="flex gap-2 justify-center md:grid md:max-w-[200px] md:col-start-2 md:row-start-1  md:justify-center">
        <span classname="md:block">Top</span>
        <span classname="md:block">Product</span>
        <span classname="md:block">Of</span>
        <span classname="md:block">The</span>
        <span classname="md:block">Week</span>
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

{
  /* TODO:Satır 23: .map methodu işimi zorlaştırıyordu; çünkü map her bir itemi,
  yine array [{}] formatında döndürüyordu. Bana obje lazım. */
}

{
  /* TODO:<div class="flex gap-2 items-center md:grid md:col-start-2 row-start-1 whitespace-normal md:whitespace-pre-line">
        <h2 className="h2 md:whitespace-pre-line whitespace-normal">
          the
          <br />
          products
          <br /> of <br />
          week
        </h2>} */
}
