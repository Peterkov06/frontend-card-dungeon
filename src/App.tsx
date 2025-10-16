import { useEffect, useState } from "react"
import Card from "./components/Card"
import type { CardType } from "./types/CardType"
import PlayerStats from "./components/PlayerStats"
import Deck from "./components/Deck"

const App = () => {
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
    <div className="flex flex-row w-full p-5">
      <div className="flex flex-col w-8/12 items-center">
        <div className="flex flex-row flex-wrap gap-2">
          <Card {...cards[0]}></Card>
        </div>
      </div>
      <div className="flex flex-col w-4/12 items-end gap-15">
        <PlayerStats></PlayerStats>
        <Deck></Deck>
      </div>
    </div>
  )
}

export default App