import React from "react";

const Client = ({ src, alt, link, width = 300, height = 200 }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={alt}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: "cover",
          filter: "grayscale(100%)",
        }}
      />
    </a>
  );
};

export default Client;
