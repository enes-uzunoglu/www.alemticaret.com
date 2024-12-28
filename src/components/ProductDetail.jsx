import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductDetail() {
  const { id } = useParams(); // URL'den ürün id'sini alıyoruz
  const products = useSelector((state) => state.product.productList.products);
  const product = products.find((p) => p.id === parseInt(id)); // Seçilen ürünü buluyoruz

  if (!product) {
    return <div>Ürün bulunamadı</div>; // Ürün bulunamazsa mesaj gösteriyoruz
  }

  const { name, description, price, images } = product;

  return (
    <div className="max-w-[480px] mx-auto py-8">
      <Card className="w-full max-w-full rounded-lg shadow-lg bg-white">
        <CardContent className="p-0">
          {/* Ürünün resmini ve açıklamasını göster */}
          <img
            src={images[0].url}
            alt={name}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </CardContent>
        <CardFooter className="p-4 bg-gray-50">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-700">{description}</p>
          <p className="text-blue-600 text-lg font-bold mt-2">{price} USD</p>
        </CardFooter>
      </Card>
    </div>
  );
}
