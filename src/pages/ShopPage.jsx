import { Categories, Clients } from "@/components";
import ProductsList from "@/components/ProductList";
import { PrimaryLayout } from "@/layout";
import React from "react";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <PrimaryLayout>
      <Categories />
      <ProductsList />
      <Clients />
    </PrimaryLayout>
  );
}
