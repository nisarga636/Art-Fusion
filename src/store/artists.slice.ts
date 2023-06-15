import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface Artist {
  id: string;
  fullname: string;
  age: number;
  about: string;
  skills: string[];
  field: string;
  location: string;
  avatar:string;
}

const ArtistAdapater = createEntityAdapter<Artist>({
  selectId: (artist) => artist.id,
});

export const ArtistsSlice = createSlice({
  name: "artists",
  reducers: {
    addManyArtist: ArtistAdapater.addMany,
  },
  initialState: ArtistAdapater.getInitialState({
    isLoading:false
  }),
});

export const ArtistSelector = ArtistAdapater.getSelectors<RootState>(
  (state) => state.artists
);
export const { addManyArtist } = ArtistsSlice.actions;
