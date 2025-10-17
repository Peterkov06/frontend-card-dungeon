import { createContext, useEffect, useState, type ReactNode } from 'react'
import type { CardType } from '../types/CardType'

type ContextType = 
{
  health: number,
  strenth: number,
  deck: CardType[], 
}

export const GameContext = createContext<ContextType>({health:0, deck: [], strenth: 0});

const GameContextProv = (props: {children: ReactNode}) => {
    const [cards, setCards] = useState<CardType[]>([])
    useEffect(() => {
    getData();
  }, [])

  async function getData()
  {
    const res = await fetch("/cards.json");
    if (!res.ok)
    {
      console.error("ERROR fetching data");
    }
    const result = await res.json();
    setCards(result);
  }
  return (
    <GameContext.Provider value={{deck: cards, health: 5, strenth: 5}}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProv