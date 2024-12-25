import React from "react";
import Client from "./Client";

import {
  amazon,
  trendyol,
  n11,
  shopier,
  epttavm,
  hepsiburada,
} from "../../assets";
//TODO: DOSYA YOLLARI ÇALIŞMALISIN.

const ClientsData = [
  {
    src: amazon,
    alt: "Image 1",
    link: "https://example.com/image1",
  },
  {
    src: trendyol,
    alt: "Image 2",
    link: "https://example.com/image2",
  },
  {
    src: shopier,
    alt: "Image 3",
    link: "https://example.com/image3",
  },
  {
    src: hepsiburada,
    alt: "Image 4",
    link: "https://example.com/image4",
  },
  {
    src: epttavm,
    alt: "Image 5",
    link: "https://example.com/image5",
  },
  {
    src: n11,
    alt: "Image 6",
    link: "https://example.com/image6",
  },
];

const Clients = () => {
  return (
    <div className="max-w-[280px] mx-auto md:max-w-[480px] md:flex-nowrap flex flex-wrap gap-x-5 gap-y-3 justify-center md:gap-6">
      {ClientsData.map((image, index) => (
        <Client key={index} src={image.src} alt={image.alt} link={image.link} />
      ))}
    </div>
  );
};

export default Clients;
