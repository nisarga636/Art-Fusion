import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";

export const fetchDisplayProduction = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/DisplayProduction/fetchDisplayProduction",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("productionProfiles")
        .select("*")

      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);



interface InitialStateProps {
  data: any[]
  isLoading: boolean;
  error: null | string | undefined;
  isinserting: boolean;

}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
  isinserting: false,
}

export const DisplayProductionSlice = createSlice({
  name: "DisplayProduction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDisplayProduction.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchDisplayProduction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDisplayProduction.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
  }
}
)

export default DisplayProductionSlice.reducer;