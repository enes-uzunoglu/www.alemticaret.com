import { fetchProductsThunk } from "@/store/thunks/productThunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCard } from ".";
export default function ProductsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);
  const products = useSelector((state) => state.product.productList.products);
  return (
    <div>
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}
