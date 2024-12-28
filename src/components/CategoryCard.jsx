import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CategoryCard(props) {
  const { category } = props;
  const { img, title, gender, rating, description } = category;

  const genderText = gender === "e" ? "(Bay)" : "(Bayan)";
  const formattedRating = `${rating} ⭐`;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card
      className="w-full sm:max-w-[480px] md:max-w-[480px] mx-auto h-[120px] rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Kartın İçeriği */}
      <CardContent className="p-0">
        {/* Görselin Arka Plana Yerleştirilmesi */}
        <div className="w-full h-full absolute inset-0">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </CardContent>

      {/* Ön Yüz: Title ve Açıklama */}
      <CardHeader
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-1 transition-all duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <CardTitle className="text-xs font-semibold text-white truncate">
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-white mt-1">
          {genderText}
        </CardDescription>
      </CardHeader>

      {/* Arka Yüz: Hover Effect */}
      <div
        className={`absolute inset-0 bg-white text-gray-800 rounded-lg p-2 flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500`}
      >
        {/* İçerik Ortalanacak */}
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-xs text-gray-600">{description}</p>
          <p className="text-xs text-gray-600">{genderText}</p>
          <p className="text-xs text-gray-600">{title}</p>
        </div>

        {/* Rating kısmı en altta */}
        <CardFooter className="mt-auto flex items-center justify-center">
          <p
            className={`text-sm font-bold text-blue-600 transition-transform ${
              isHovered ? "transform scale-110" : ""
            }`}
          >
            {formattedRating}
          </p>
        </CardFooter>
      </div>

      {/* Kartın 3D Dönüşüm Efekti */}
      <div
        className={`absolute inset-0 transform-gpu transition-transform duration-500 ease-out group-hover:rotate-y-180 ${
          isHovered ? "rotate-y-180" : ""
        }`}
      ></div>
    </Card>
  );
}
