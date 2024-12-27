import { Categories } from "@/components";
import ProductsList from "@/components/ProductList";
import { PrimaryLayout } from "@/layout";
import React from "react";

export default function ShopPage() {
  return (
    //TODO: Burada items-center ekleyince carosel inanılmaz daralıyor.
    <PrimaryLayout>
      <Categories />
      <ProductsList />
    </PrimaryLayout>
  );
}
