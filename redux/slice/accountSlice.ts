import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: null,
  reducers: {
    setAccount: (state, action) => action.payload,
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
