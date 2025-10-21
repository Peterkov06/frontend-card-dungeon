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
      subtractStrenght: (state, action) =>
      {
        if (state.value - action.payload >= 0)
        {
          state.value -= action.payload;
        }
      },
      addStrenght: (state, action) =>
      {
        if (state.value + action.payload < 6)
          {
            state.value += action.payload;
          }
      },
    }
  }
)

export const {subtractStrenght, addStrenght} = strenghtSlice.actions
export default strenghtSlice.reducer