import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ArtistsSlice } from "./artists.slice";
import { LikesSlice } from "./likes.slice";
import { ProjectSlice } from "./productions.slice";

export const store = configureStore({
  reducer: {
    [ArtistsSlice.name]: ArtistsSlice.reducer,
    [LikesSlice.name]: LikesSlice.reducer,
    [ProjectSlice.name]: ProjectSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
