import { createSlice } from "@reduxjs/toolkit";

export const strenghtSlice = createSlice(
  {
    name: "strenght",
    initialState:
    {
      value: 0
    },
    reducers:
    {
      modifyStrenghtByValue: (state, action) =>
      {
        if (state.value + action.payload < 6)
        {
          state.value += action.payload;
        }
      }
    }
  }
)

export const {modifyStrenghtByValue} = strenghtSlice.actions
export default strenghtSlice.reducer