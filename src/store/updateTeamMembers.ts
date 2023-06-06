import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchTeamMembers = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/displayTeamMembers/fetchTeamMembers",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("users")
        .select("*")
        
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
/*
export const filternotes = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/displayTeamMembers/filternotes",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("notes")
        .select("*").eq('sub_code','20CS21P')
        
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);*/
interface InitialStateProps {
    isLoading: boolean;
    error: null | string | undefined;
    data: any[];
   
  }
  
  const initialState: InitialStateProps = {
    data: [],
    isLoading: false,
    error: null,
    
  };
export  const DisplaySlice = createSlice({
    name: "displayTeamMembers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTeamMembers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchTeamMembers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchTeamMembers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    /*  builder.addCase(filternotes.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(filternotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(filternotes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });*/
    }})
    export default DisplaySlice;