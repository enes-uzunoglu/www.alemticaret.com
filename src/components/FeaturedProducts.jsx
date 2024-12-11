import React from "react";

const image1 = "https://picsum.photos/240/360";
const image2 = "https://picsum.photos/240/361";
export default function FeaturedProducts() {
  return (
    <div className="grid grid-rows-2 gap-4 md:grid-cols-2 md:max-w-[1200px]">
      <div className="grid gap-4">
        <h2 className="h2">We love what we do</h2>
        <p className="p1 text-secondaryTextColor">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics Problems trying to resolve
          the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:col-start-1 md:row-start-1">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
      </div>
    </div>
  );
}
