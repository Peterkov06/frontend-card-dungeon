import { configureStore } from "@reduxjs/toolkit";import { healthSlice } from "./HealthSlice";
import { deckSlice } from "./DeckSlice";
import { strenghtSlice } from "./StrenghtSlice";
;

export const DataStore = configureStore(
  {
    reducer: 
    {
      health: healthSlice.reducer,
      deck: deckSlice.reducer,
      strenght: strenghtSlice.reducer
    }
  }
)

export type RootState = ReturnType<typeof DataStore.getState>;
export type AppDispatch = typeof DataStore.dispatch;