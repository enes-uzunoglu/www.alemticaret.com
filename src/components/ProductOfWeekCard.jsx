import React from "react";
import ExploreItemsButton from "./buttons/ExploreItemsButton";

const ProductOfWeekCard = (props) => {
  const { cardCover } = props;
  const { coverImage, coverGender } = cardCover;
  console.log(cardCover);
  return (
    <div
      className="bg-cover bg-center max-w-[350px] grid grid-rows-7"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="row-span-3 row-start-5 bg-secondaryColor opacity-75 flex flex-col p-4">
        <h2 className="h2 text-thirdColorText">
          {`Top Product Of The Week ${coverGender}`}
        </h2>
        <ExploreItemsButton />
      </div>
    </div>
  );
};

export default ProductOfWeekCard;
