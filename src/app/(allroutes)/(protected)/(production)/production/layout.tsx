"use client";

import { useAppDispatch } from "@/lib/hooks";
import { useAppSelector } from "@/store";
import { ArtistSelector, fetchIntialArtist } from "@/store/artists.slice";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();
  const isAlereadyArtistsExist = useAppSelector(ArtistSelector.selectIds)
    .length;

  if (!isAlereadyArtistsExist) dispatch(fetchIntialArtist());

  return (
    <main
      className="h-full w-full"
      style={{
        paddingRight: "240px",
        paddingLeft: "240px",
        paddingTop: "30px",
        paddingBottom: "30px",
        height: "100%",
      }}
    >
      {children}
    </main>
  );
}
