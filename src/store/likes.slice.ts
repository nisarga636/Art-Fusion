import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type Like = {
  postId: string;
};

const LikesAdapter = createEntityAdapter<Like>({
  selectId: (Like) => Like.postId,
});

export const LikesSlice = createSlice({
  name: "likes",
  reducers: {
    addOneLike: (state, action) => {
      return LikesAdapter.addOne(state, {
        postId: action.payload,
      });
    },
    removeOneLike: (state, action) => {
      return LikesAdapter.removeOne(state, action.payload);
    },
  },
  initialState: LikesAdapter.getInitialState({
    isLoading: false,
  }),
});

export const LikesSelector = LikesAdapter.getSelectors<RootState>(
  (state) => state.likes
);
export const { addOneLike, removeOneLike } = LikesSlice.actions;
