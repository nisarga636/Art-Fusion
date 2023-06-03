import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  successMessage: null,
};

export const createAccountSlice = createSlice({
  name: 'createAccount',
  initialState,
  reducers: {
    createAccountRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.successMessage = null;
    },
    createAccountSuccess: (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload;
    },
    createAccountFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createAccountRequest,
  createAccountSuccess,
  createAccountFailure,
} = createAccountSlice.actions;

export default createAccountSlice.reducer;