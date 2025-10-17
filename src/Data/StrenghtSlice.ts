import { createSlice } from "@reduxjs/toolkit";

export const strenghtSlice = createSlice(
  {
    name: "strenght",
    initialState:
    {
      value: 5
    },
    reducers:
    {
      modifyByValue: (state, action) =>
      {
        state.value += action.payload
      }
    }
  }
)

export const {modifyByValue} = strenghtSlice.actions
export default strenghtSlice.reducer