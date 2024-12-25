import React from "react";
import {
  BestSeller,
  BestServices,
  HeaderCarousel,
  Clients,
  Featured,
  ProductsOfWeek,
  Satisfaction,
} from "../../components";

export default function homePage() {
  return (
    //TODO: Burada items-center ekleyince carosel inanılmaz daralıyor.
    <div className="flex flex-col mx-auto  gap-12">
      <HeaderCarousel />
      <Clients />
      <ProductsOfWeek />
      <BestSeller />
      <Satisfaction />
      <BestServices />
      <Featured />
    </div>
  );
}
