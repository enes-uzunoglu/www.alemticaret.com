import React from "react";
import FeaturePostCard from "./FeaturedPostCard";

const posts = [
  { image: "https://picsum.photos/360/300" },
  { image: "https://picsum.photos/360/301" },
];

export default function FeaturedPosts() {
  return (
    <div>
      {posts.map((post, index) => (
        <FeaturePostCard key={index} post={post} />
      ))}
    </div>
  );
}
