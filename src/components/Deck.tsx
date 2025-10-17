import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCard } from '../Data/DeckSlice';
import type { RootState } from '../Data/DataStore';

const Deck = () => {
  const [ind, setind] = useState(0);
  const {deck} = useSelector((state:RootState) => state.deck);
  const disp = useDispatch();

  useEffect(() => {
    if (deck.length > 0 && ind < deck.length)
    {
      disp(selectCard(deck[ind].cardId))
    }
    else
    {
      disp(selectCard(""))
    }
  }, [ind])
  

  return (
    <div className='top-10 right-14 ml-auto absolute' onClick={() => setind(prev => prev + 1)}>
        <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] gap-4 bg-gray-400 absolute top-0 right-0'></div>
        <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] gap-4 bg-gray-400 absolute top-4 right-4'></div>
        <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] gap-4 bg-gray-400 absolute top-8 right-8'></div>
    </div>
  )
}

export default Deck