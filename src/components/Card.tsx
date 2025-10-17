import { useSelector } from 'react-redux';
import type { RootState } from '../Data/DataStore';
import type { CardType } from '../types/CardType';
import { useEffect, useState } from 'react';
import Actions from './Actions';

const Card = () => {
    const {deck, status, currentCardID} = useSelector((state:RootState) => state.deck);
    const [currentCard, setCurrCard] = useState<CardType | undefined>(undefined);
    const [drawn, setDrawn] = useState(false);

    useEffect(() => {
      if (currentCardID !== "")
      {
        setCurrCard(deck.filter(x => x.cardId === currentCardID)[0]);
      }
      else
      {
        setCurrCard(undefined);
      }
    }, [currentCardID])
    

  return (
    <div className={drawn ? "absolute top-[25%] left-[25%] transition-all scale-150 z-10" : `flex flex-col items-center absolute top-24 right-26 z-10 transition-all`} onClick={() => setDrawn(true)}>
      {status === "loading" &&
        <p>Loading the cards...</p>
      }
      { status === "succeeded" && deck.length > 0 && currentCard && 
        <div>
          <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] bg-gray-400 gap-15 z-20' style={{display: drawn ? "none" : "flex"}}>

          </div>
          <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] bg-white gap-15 z-20' style={{display: drawn ? "flex" : "none" }}>
            <p className='flex justify-center scale-[400%]'>{currentCard.enemyIcon}</p>
            <div>
              <p>Level: {currentCard.level}</p>
              <p>Reward: {currentCard.revard}</p>
              <p>Penatlty: {currentCard.penalty}</p>
            </div>
          </div>
        </div>
      }
      {status === "failed" && 
        <p>Failed to fetch data</p>
      }
      {drawn &&
      <Actions></Actions>
      }
    </div>)   
}

export default Card