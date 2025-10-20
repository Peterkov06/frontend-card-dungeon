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
    selectCard: (state) =>
    {
      state.currentCardID = state.deck[0].cardId;
    },
    loadingStarted: (state) => {
      state.status = 'loading';
    },
    removeFromDeck: (state) =>
    {
      state.deck = state.deck.filter((x) => x.cardId !== state.currentCardID)
    },
    moveBackInDeck: (state) =>
    {
      const current = state.deck.shift();
      current && state.deck.push(current);
    },
    loadDeck: (state, action: PayloadAction<CardType[]>) =>
    {
      state.deck = action.payload;
      state.status = "succeeded";
    },
    loadingFailed: (state) => {
      state.status = 'failed';
    }
  }
})

export const {removeFromDeck, loadDeck, loadingFailed, loadingStarted, selectCard, moveBackInDeck} = deckSlice.actions
export default deckSlice.reducer