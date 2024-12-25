const ProductOfWeekCard = ({ cardCover }) => {
  const { coverImage, coverGender } = cardCover;

  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-end rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="flex flex-col justify-end gap-4 bg-black bg-opacity-50 p-4 w-full h-full">
        <h2 className="text-2xl text-white font-semibold">{coverGender}</h2>
      </div>
    </div>
  );
};

export default ProductOfWeekCard;
