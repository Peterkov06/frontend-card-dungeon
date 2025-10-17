import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardType } from "../types/CardType";

interface DeckState 
{
  deck: CardType[],
  status: "idle" | "loading" | "succeeded" | "failed",
  currentCardID: string,
}

const initialState: DeckState =
{
  deck: [],
  status: "idle",
  currentCardID: "",
}

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers:
  {
    selectCard: (state, action: PayloadAction<string>) =>
    {
      state.currentCardID = action.payload;
    },
    loadingStarted: (state) => {
      state.status = 'loading';
    },
    removeFromDeck: (state, action: PayloadAction<number>) =>
    {
      state.deck = state.deck.filter((x, ind) => ind !== action.payload)
    },
    loadDeck: (state, action: PayloadAction<CardType[]>) =>
    {
      state.deck = action.payload;
      state.status = "succeeded"
    },
    loadingFailed: (state) => {
      state.status = 'failed';
    }
  }
})

export const {removeFromDeck, loadDeck, loadingFailed, loadingStarted, selectCard} = deckSlice.actions
export default deckSlice.reducer