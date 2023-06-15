import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";

export const fetchIntialProduction = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>(
  "/artist/fetchIntialProduction",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const artists = await SupaClient.from("productionProfiles").select(
        "*,user(id,name,image)"
      );
      const data = artists.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue("Check your internent connectivity");
    }
  }
);

export const fetchMyProduction = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>(
  "/artist/fetchMyProduction",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const artists = await SupaClient.from("productionProfiles")
        .select("*,user(id,name,image)")
        .eq("artistsId", payload);
      const data = artists.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue("Check your internent connectivity");
    }
  }
);

export type Project =
  Database["public"]["Tables"]["productionProfiles"]["Row"] & {
    user: Pick<
      Database["public"]["Tables"]["user"]["Row"],
      "id" | "name" | "image"
    >;
  };

const ProjectAdapater = createEntityAdapter<Project>({
  selectId: (project) => project.id,
});

export const ProjectSlice = createSlice({
  name: "project",
  reducers: {
    addManyArtist: ProjectAdapater.addMany,
  },
  initialState: ProjectAdapater.getInitialState({
    isLoading: false,
  }),
  extraReducers(builder) {
    builder
      .addCase(fetchIntialProduction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchIntialProduction.fulfilled, (state, action) => {
        state.isLoading = false;
        ProjectAdapater.setMany(state, action.payload);
      });

    builder
      .addCase(fetchMyProduction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMyProduction.fulfilled, (state, action) => {
        state.isLoading = false;
        ProjectAdapater.setMany(state, action.payload);
      });
  },
});

export const ProjectSelector = ProjectAdapater.getSelectors<RootState>(
  (state) => state.project
);
export const { addManyArtist } = ProjectSlice.actions;
