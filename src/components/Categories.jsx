import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/thunks/productThunks";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard"; // CategoryCard'ı dahil ediyoruz

export default function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.product.categories);

  // Kategorileri rating’e göre sıralayıp, ilk 4 kategori alıyoruz
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-w-[280px] md:max-w-[480px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
      {topCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
