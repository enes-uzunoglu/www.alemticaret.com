import React from "react";

const image = "https://picsum.photos/300/360",
  title = "Ürün Başlığı",
  description = "Ürün Açıklaması",
  oldPrice = "₺eskiFiyat",
  newPrice = "₺yeniFiyat";

const ProductCard = () => {
  return (
    <article className="w-full max-w-[300px] flex flex-col">
      {/* <article>: Bağımsız bir içerik parçasını temsil eder. */}

      <img className="w-full h-auto object-cover" src={image} alt={title} />
      {/* object-cover: Resmi, konteynere orantılı şekilde büyütür veya küçültür, 
       gerekirse keser. Ekran boyutundan bağımsız, resim her zaman konteynere oturur. */}

      <div className="flex flex-col items-center gap-2 md:gap-3 p-2 md:p-4">
        {/* <h2>: Başlık kısmı */}
        <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>
        {/* text-xl: Küçük ekranlarda başlık boyutu 1.25rem (20px)
        sm: 640px ve üzeri ekranlarda 1.5rem (24px) kullanılır,
        md: 768px ve üzeri ekranlarda başlık boyutu 1.875rem (30px) olur. */}

        {/* <p>: Açıklama kısmı */}
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
        {/* text-sm: Küçük ekranlarda yazı boyutu 0.875rem (14px),
        sm: 640px ve üzeri ekranlarda 1rem (16px),
        md: 768px ve üzeri ekranlarda 1.125rem (18px) kullanılır. */}

        <div className="flex gap-2 md:gap-3">
          {/* Eski fiyat <s> etiketiyle gösterildi */}
          <span className="text-sm sm:text-base md:text-lg text-gray-500">
            <s>{oldPrice}</s>
          </span>
          {/* text-sm: Küçük ekranlarda fiyat yazısı küçük 0.875rem (14px),
          sm: 640px ve üzeri ekranlarda normal 1rem (16px),
          md: 768px ve üzeri ekranlarda büyük 1.125rem (18px) yazı tipi kullanılır. */}

          {/* Yeni fiyat */}
          <span className="text-lg sm:text-xl md:text-2xl font-semibold">
            {newPrice}
          </span>
          {/* text-lg: Küçük ekranlarda yazı boyutu 1.125rem (18px),
          sm: 640px ve üzeri ekranlarda 1.25rem (20px),
          md: 768px ve üzeri ekranlarda 1.5rem (24px) kullanılır. */}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
