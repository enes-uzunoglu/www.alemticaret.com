import React from "react";
import { FeaturedCard } from "..";

const posts = [
  { image: "https://picsum.photos/420/420" },
  { image: "https://picsum.photos/420/421" },
];

export default function FeaturedPosts() {
  return (
    <div className="max-w-[280px] md:max-w-[480px] mx-auto grid grid-cols-1 md:grid-cols-2  gap-2 px-4 md:px-0">
      {posts.map((post, index) => (
        <FeaturedCard key={index} post={post} />
      ))}
    </div>
  );
}
