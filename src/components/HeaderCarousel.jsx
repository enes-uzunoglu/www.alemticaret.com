import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "./ui/button";

const carouselData = [
  "https://picsum.photos/800/400",
  "https://picsum.photos/800/401",
  "https://picsum.photos/800/402",
];

export default function HeaderCarousel() {
  return (
    <Carousel className="rounded-xl overflow-hidden max-w-[280px] max-h-[720px] md:max-w-[480px] mx-auto">
      {/*TODO: add owerflow-hidden*/}
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="bg-cover bg-center h-[320px]"
            style={{ backgroundImage: `url(${item})` }}
          >
            <Button>Shop Now</Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
