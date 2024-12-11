import React from "react";

const ProductCard = (props) => {
  const { product } = props;
  const { image, title, description, oldPrice, newPrice } = product;
  return (
    <div className="grid grid-rows-[auto,1fr] gap-4 md:gap-6 place-items-center">
      <img className="" src={image} alt={title} />

      <div className="flex flex-col items-center gap-2 md:gap-3">
        <h3 className="h3">{title}</h3>
        <p className="p3 text-secondaryTextColor">{description}</p>

        <div className="flex gap-2 md:gap-3">
          <p className="p2 text-secondaryTextColor line-through">{oldPrice}</p>
          <p className="p2 text-primaryTextColor">{newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* Satır 7: items-center çalışmadı. İç div'in dış div'in genişiliğini tamamen doldurması,
  yanıltıcı oldu. İmg ortalanmayınca anladım.*/
}
