import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";

export const fetchIntialArtist = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>(
  "/artist/fetchInitialArtist",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const artists = await SupaClient.from("user")
        .select("*")
        .eq("role_type", "ARTIST");
      const data = artists.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue("Check your internent connectivity");
    }
  }
);

export type  Artist = Database["public"]["Tables"]["user"]["Row"]

const ArtistAdapater = createEntityAdapter<Artist>({
  selectId: (artist) => artist.id,
});

export const ArtistsSlice = createSlice({
  name: "artists",
  reducers: {
    addManyArtist: ArtistAdapater.addMany,
  },
  initialState: ArtistAdapater.getInitialState({
    isLoading: false,
  }),
  extraReducers(builder) {
    builder
      .addCase(fetchIntialArtist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchIntialArtist.fulfilled, (state, action) => {
        state.isLoading = false;
        ArtistAdapater.setMany(state, action.payload);
      });
  },
});

export const ArtistSelector = ArtistAdapater.getSelectors<RootState>(
  (state) => state.artists
);
export const { addManyArtist } = ArtistsSlice.actions;
