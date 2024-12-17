import React from "react";
import { FeaturedPostCard } from "../../components";

const posts = [
  { image: "https://picsum.photos/360/300" },
  { image: "https://picsum.photos/360/301" },
];

export default function FeaturedPosts() {
  return (
    <div>
      {posts.map((post, index) => (
        <FeaturedPostCard key={index} post={post} />
      ))}
    </div>
  );
}
