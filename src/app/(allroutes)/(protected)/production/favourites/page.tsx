"use client";
import FeedCard from "@/components/sub-components/FeedCard";
import { useAppSelector } from "@/store";
import { ArtistSelector } from "@/store/artists.slice";
import { useParams } from "next/navigation";
import React from "react";

export default function FavouritesPage() {
  const params = useParams();
  const artistId = params.artistId;
  const artistProfile = useAppSelector((state) =>
    ArtistSelector.selectById(state, artistId)
  );

  if (!artistProfile) return <h1>Loading...</h1>;

  return (
    <div>
      <FeedCard feed={artistProfile} />
    </div>
  );
}
