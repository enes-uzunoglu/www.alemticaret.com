import React from "react";

export default function Client({ src, alt, link }) {
  return (
    // TODO: GÜVENLİK ÖNLEMİ VAR.
    <a
      className="cursor-pointer  w-[150px] md:w-[100px] flex items-center"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        //TODO: max-w-[100px] e kadar genıslıyebılecegı kadar genısler. eger konulmasaydı kendı boyutu kadar genısleyecektı. eger 200 px yapsaydı bu seferde 200 e kadar genısleyecektı orada sınılanacaktı sıkıntı cıkıyor oyle de
        className="object-fill filter grayscale hover:grayscale-0 transition duration-300"
        // TODO: object-contain kapsayıcı alanda tamamen görünmesibi sağlar.
        src={src}
        alt={alt}
      />
    </a>
  );
}
