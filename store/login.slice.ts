"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../utils/supabase";

export const fetchInitialLogin = createAsyncThunk<
  any,
  void,
  { rejectValue: { msg: string } }
>(
  "artists/fetchInitialLogin",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("artists")
        .select("*,artists(id)")
        .order("name", {
          ascending: false,
        });
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);



interface InitialStateProps {
  isLoading: boolean;
  error: null | string | undefined;
  data: any[];
  isPosting: boolean;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
  isPosting: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchInitialLogin.fulfilled,
      (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchInitialLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchInitialLogin.rejected,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      }
    );
  },
});
