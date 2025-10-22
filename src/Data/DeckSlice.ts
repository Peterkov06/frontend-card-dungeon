import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardType } from "../types/CardType";
import { GetRandom } from "../RandomGenerator";

interface DeckState 
{
  deck: CardType[],
  fleedCards: CardType[],
  status: "idle" | "loading" | "succeeded" | "failed",
  currentCardID: string,
}

const initialState: DeckState =
{
  deck: [],
  fleedCards: [],
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
      const ind = GetRandom(0, state.deck.length - 1);
      state.currentCardID = state.deck[ind].cardId;
    },
    loadingStarted: (state) => {
      state.status = 'loading';
    },
    removeFromDeck: (state) =>
    {
      state.deck = state.deck.filter((x) => x.cardId !== state.currentCardID)
    },
    removeFromFleed: (state, action: PayloadAction<string>) =>
    {
      state.fleedCards = state.fleedCards.filter((x) => x.cardId !== action.payload)
    },
    fleeCurrent: (state) =>
    {
      const current = state.deck.find(x =>x.cardId == state.currentCardID);
      if (current)
      {
        state.deck = state.deck.filter(x => x.cardId !== state.currentCardID);
        state.fleedCards.push(current);
      }
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

export const {removeFromDeck, loadDeck, loadingFailed, loadingStarted, selectCard, fleeCurrent, removeFromFleed} = deckSlice.actions
export default deckSlice.reducer