import type { Reducer } from "@reduxjs/toolkit";
import type { CardType } from "../types/CardType"

export type GameState = 
{
  health: number,
  strenght: number,
  deck: CardType[],
}

export type GameStateActions = 
{option: "Change_Health", payload: number} |
{option: "Change_Strenght", payload: number} |
{option: "Remove_From_Deck", payload: number} 
