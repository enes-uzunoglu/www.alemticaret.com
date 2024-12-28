import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "@/store/thunks/productThunks";
import { ProductCard } from ".";
import { Grid, List } from "lucide-react"; // Lucide ikonlarını ekliyoruz.

export default function ProductsList() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Ürün başına gösterilecek sayfa sayısı
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("");
  const products = useSelector(
    (state) => state.product.productList.products || []
  );
  const totalProducts = products.length;

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const sortedProducts = [...currentProducts];
  if (sortOption === "popularity") {
    sortedProducts.sort((a, b) => b.popularity - a.popularity);
  } else if (sortOption === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className="max-w-full md:max-w-[960px] mx-auto px-4">
      {/* Filters and View Options */}
      <div className="max-w-[280px] md:max-w-[480px] mx-auto mb-8">
        {/* Product count */}
        <div className="text-xs text-gray-500 mb-4">
          {totalProducts} ürün gösteriliyor
        </div>

        {/* View Options */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-6">
            <span className="text-xs text-gray-600">Görünüm:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <List size={16} />
            </button>
          </div>

          {/* Filter options */}
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-600">Filtrele:</span>
            <select
              id="sort"
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
              className="px-4 py-2 border rounded-md bg-white text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300"
            >
              <option value="">Seçiniz</option>
              <option value="popularity">En Popüler</option>
              <option value="price-asc">Artan Fiyat</option>
              <option value="price-desc">Azalan Fiyat</option>
              <option value="rating">Yüksek Puan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div
        className={`grid ${
          viewMode === "grid"
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-6"
            : "grid-cols-2 gap-6" // Liste görünümünde her satırda 2 ürün
        }`}
      >
        {sortedProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-3">
        <button
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
