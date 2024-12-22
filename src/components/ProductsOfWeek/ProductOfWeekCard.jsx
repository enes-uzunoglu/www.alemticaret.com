import React from "react";
import { ExploreItemsButton } from "../../components";

const ProductOfWeekCard = (props) => {
  const { cardCover } = props;
  const { coverImage, coverGender } = cardCover;

  return (
    <div
      // TODO:BURADA max-h-[900px] KULLANABILIRDIM GEREKSEYDI AMA GEREKMEDI. KULLANMAN GEREKEN COK DURUM OALCAK AMA.
      className="min-h-[350px]  md:min-h-[250px] bg-cover bg-center flex flex-col justify-end "
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      {/* TODO:BURADA KÜÇÜLME İSTEĞİ VAR YADA MIN VERILINCE OLUSUYOR. SONUCTA DA BIR YERDE SINIRLIYORUZ. */}
      <div className="flex flex-col justify-end gap-4 bg-secondaryColor opacity-75">
        {/* TODO:BURADA min-h-150 diyerek minimum yüksekliği içerik değilde 200 px yaptık. backgroun resımlerı resım oalrak degıl de div olarak dusun. */}

        {/* TODO:  AYRICA YENİ FELSEFEMİZ PARçaDAN BÜTÜNE . TAKILDIGIN BIR YER OLURSA EN ICTEN COZMEYE BASLA PARÇA PARÇA BUTUNE GIT !!!!!!!!!!!!!*/}
        <h2 className="h2 text-thirdColorText">{`${coverGender}`}</h2>
        <ExploreItemsButton />
      </div>
    </div>
  );
};

export default ProductOfWeekCard;
