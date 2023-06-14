"use client";

import FeedCard from "@/components/sub-components/FeedCard";

export default function Page() {
  return (
    <div className="text-black flex flex-col h-fit w-full gap-4">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}
