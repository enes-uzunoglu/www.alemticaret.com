import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductCard(props) {
  const { product } = props;
  const { id, images, name, price } = product;

  return (
    <Link to={`/product/${id}`}>
      <Card className="w-full max-w-full sm:max-w-[480px] md:max-w-[480px] mx-auto rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl relative">
        <CardContent className="p-0">
          <img
            src={images[0].url}
            alt={name}
            className="w-full h-[180px] object-cover rounded-t-lg"
          />
        </CardContent>

        <CardFooter className="absolute bottom-0 w-full p-2 bg-black bg-opacity-60">
          <div className="text-center text-white">
            <h3 className="text-[8px] font-semibold truncate">{name}</h3>
            <p className="text-[6px] text-gray-400 line-through mt-0.5">
              {price} USD
            </p>
            <p className="text-[8px] font-bold text-blue-600 mt-0.5">
              {(price * 1.2).toFixed(2)} USD
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
