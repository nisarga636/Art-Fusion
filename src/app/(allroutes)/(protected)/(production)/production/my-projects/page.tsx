import FeedCard from "@/components/sub-components/ProjectCard";
import React from "react";

export default function page() {
  return (
    <div
      className="grid gap-3 px-2 pb-5"
      style={{
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        height: "auto",
      }}
    >
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}
