import React from "react";
import Client from "./Client";

const ClientsData = [
  {
    src: "https://picsum.photos/300/360",
    alt: "Image 1",
    link: "https://example.com/image1",
  },
  {
    src: "https://picsum.photos/300/361",
    alt: "Image 2",
    link: "https://example.com/image2",
  },
  {
    src: "https://picsum.photos/300/362",
    alt: "Image 3",
    link: "https://example.com/image3",
  },
  {
    src: "https://picsum.photos/300/363",
    alt: "Image 4",
    link: "https://example.com/image4",
  },
  {
    src: "https://picsum.photos/300/364",
    alt: "Image 5",
    link: "https://example.com/image5",
  },
  {
    src: "https://picsum.photos/300/365",
    alt: "Image 6",
    link: "https://example.com/image6",
  },
];

const Clients = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-6">
      {ClientsData.map((image, index) => (
        <Client key={index} src={image.src} alt={image.alt} link={image.link} />
      ))}
    </div>
  );
};

export default Clients;
