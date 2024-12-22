import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from './ui/button';

const carouselData = [
  'https://picsum.photos/800/400',
  'https://picsum.photos/800/401',
  'https://picsum.photos/800/402',
];

export default function HeaderCarousel() {
  return (
    <Carousel className="rounded-2xl">
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="bg-cover bg-center h-[720px]"
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
