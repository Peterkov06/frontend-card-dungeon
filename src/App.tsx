import Card from "./components/Card"
import PlayerStats from "./components/PlayerStats"
import Deck from "./components/Deck"
import { useEffect } from "react"
import type { CardType } from "./types/CardType"
import { useDispatch, useSelector } from "react-redux"
import { loadDeck, loadingFailed, loadingStarted, selectCard } from "./Data/DeckSlice"
import { v4 } from "uuid"
import type { RootState } from "./Data/DataStore"

const App = () => {
  useEffect(() => {
    getData();
  }, [])
  
  
  const dispatch = useDispatch();
    const {status} = useSelector((state:RootState) => state.deck);

  async function getData()
  {
    if (status === "idle")
    {
      dispatch(loadingStarted());
      //await new Promise (res => setTimeout(res, 3000))
      const res = await fetch("/cards.json");
      if (!res.ok)
      {
        console.error("ERROR fetching data");
        dispatch(loadingFailed());
      }
      const result: CardType[] = await res.json();
      const cardsWithID = result.map(x => ({...x, cardId: v4()}));
      dispatch(loadDeck(cardsWithID));
      dispatch(selectCard(cardsWithID[0].cardId));
    }
  }

  return (
    <div className="flex flex-col w-full p-5 h-screen">
      <div className="flex flex-row justify-end">
        <PlayerStats></PlayerStats>
      </div>
      <div className="relative flex flex-row w-full h-full gap-2">
        <Card></Card>
        <Deck></Deck>
      </div>
    </div>

  )
}

export default App