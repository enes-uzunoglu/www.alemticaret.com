import React from "react";
import {
  BestSeller,
  BestServices,
  HeaderCarousel,
  Clients,
  Featured,
  ProductsOfWeek,
  Satisfaction,
} from "../components";
import { PrimaryLayout } from "@/layout";

export default function HomePage() {
  return (
    //TODO: Burada items-center ekleyince carosel inanılmaz daralıyor.
    <PrimaryLayout>
      <HeaderCarousel />
      <Clients />
      <ProductsOfWeek />
      <BestSeller />
      <Satisfaction />
      <BestServices />
      <Featured />
    </PrimaryLayout>
  );
}
