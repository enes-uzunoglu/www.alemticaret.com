import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function FeaturePostCard(props) {
  const { post } = props;
  const { image } = post;

  return (
    <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="relative p-0">
        <div
          className="bg-cover bg-center h-[180px]  transition-transform duration-300 hover:scale-150"
          style={{ backgroundImage: `url(${image})` }}
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg font-medium text-gray-900">
          Loudest a la Madison #1
        </CardTitle>
        <p className="text-sm text-gray-500">Google Trend Olan Yenilikler</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center text-xs text-gray-500 bg-gray-100 p-4">
        <div className="flex items-center gap-2">
          <AlarmClock size={16} />
          <p>22 Nisan 2021</p>
        </div>
        <div className="flex items-center gap-2">
          <ChartArea size={16} />
          <p>10 Yorum</p>
        </div>
      </CardFooter>

      <div className="flex items-center gap-2 mt-4 px-4 pb-4 text-blue-500 hover:text-blue-600 cursor-pointer">
        <p className="text-sm">Hakkında Daha Fazla Bilgi Edinin</p>
        <ChevronRight size={16} />
      </div>
    </Card>
  );
}
