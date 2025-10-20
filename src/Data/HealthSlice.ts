import { createSlice } from "@reduxjs/toolkit";

export const healthSlice = createSlice(
  {
    name: "health",
    initialState:
    {
      value: 5,
    },
    reducers:
    {
      modifyHealthByValue: (state, action) =>
      {
        if (state.value + action.payload < 6)
        {
          state.value += action.payload;
        }
      }
    }
  }
)

export const {modifyHealthByValue} = healthSlice.actions
export default healthSlice.reducer