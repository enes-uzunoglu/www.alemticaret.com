import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard(props) {
  const { product } = props;
  const { image, title, description, oldPrice, newPrice } = product;

  return (
    <Card>
      <CardContent>
        <img src={image} alt="image" />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <p>{oldPrice}</p>
        <p>{newPrice}</p>
      </CardFooter>
    </Card>
  );
}
