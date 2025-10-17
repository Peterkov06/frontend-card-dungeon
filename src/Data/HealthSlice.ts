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
      increment: (state) =>
      {
        state.value += 1
      },
      decrement: (state) => 
      {
        state.value -= 1
      },
      modifyByValue: (state, action) =>
      {
        state.value += action.payload;
      }
    }
  }
)

export const {increment, decrement, modifyByValue} = healthSlice.actions
export default healthSlice.reducer