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
      addHealth: (state, action) =>
      {
        if (state.value + action.payload < 6)
        {
          state.value += action.payload;
        }
      },
      subtractHealth: (state, action) =>
      {
        if (state.value - action.payload >= 0)
          {
            state.value -= action.payload;
          }
      }
    }
  }
)

export const {addHealth, subtractHealth} = healthSlice.actions
export default healthSlice.reducer