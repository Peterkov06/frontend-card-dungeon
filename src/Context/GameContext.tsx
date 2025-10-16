import React, { useEffect, useState } from 'react'
import type { CardType } from '../types/CardType'

type ContextType = 
{
    health: number,
    strenth: number,
    deck: CardType[],
    
}

const GameContext = () => {
    const [cards, setCards] = useState<CardType[]>([])

    useEffect(() => {
    getData();
  }, [])

  async function getData()
  {
    const res = await fetch("cards.json");
    if (!res.ok)
    {
      console.error("ERROR fetching data");
    }
    const result = await res.json();
    setCards(result);
  }
  return (
    <div>

    </div>
  )
}

export default GameContext