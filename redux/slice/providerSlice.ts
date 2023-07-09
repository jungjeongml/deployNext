import { createSlice } from "@reduxjs/toolkit"

export const providerSlice = createSlice({
  name: "provider",
  initialState: { provider: "none" },
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload
    },
  },
})

export const { setProvider } = providerSlice.actions
