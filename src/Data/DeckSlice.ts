import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardType } from "../types/CardType";
import { GetRandom } from "../RandomGenerator";

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
    moveBackInDeck: (state) =>
    {
      const current = state.deck.shift();
      current && state.deck.push(current);
    },
    loadDeck: (state, action: PayloadAction<CardType[]>) =>
    {
      state.deck = action.payload;
      state.status = "succeeded";
      if (action.payload.length > 0)
      {
        state.currentCardID = action.payload[0].cardId;
      }
    },
    loadingFailed: (state) => {
      state.status = 'failed';
    }
  }
})

export const {removeFromDeck, loadDeck, loadingFailed, loadingStarted, selectCard, moveBackInDeck} = deckSlice.actions
export default deckSlice.reducer