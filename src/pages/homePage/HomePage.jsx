import React from 'react';
import {
  BestSellerProducts,
  BestServices,
  HeaderCarousel,
  Clients,
  FeaturedPosts,
  ProductsOfWeek,
  Slogan,
} from '../../components';

export default function homePage() {
  return (
    //TODO: Burada items-center ekleyince carosel inanılmaz daralıyor.
    <div className="p-12 md:px-36 flex flex-col gap-12">
      <HeaderCarousel />
      <Clients />
      <ProductsOfWeek />
      <BestSellerProducts />
      <Slogan />
      <BestServices />
      <FeaturedPosts />
    </div>
  );
}
