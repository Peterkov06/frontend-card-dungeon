import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'
import { moveBackInDeck, removeFromDeck, selectCard } from '../Data/DeckSlice';

const Actions = () => {

  const disp = useDispatch();
  const {deck, currentCardID} = useSelector((state:RootState) => state.deck);

  const Flee = () =>
  {
    disp(moveBackInDeck());
    disp(selectCard());
  }

  const Fight = () =>
  {
    const attackSuccess = RollTheDice(1,20);
    var currentEnemy = deck[0];
    if (attackSuccess > currentEnemy.level)
    {
      disp(removeFromDeck());
    }
    else
    {
      console.log('Failure');
    }
  }

  const RollTheDice = (min: number, max:number) =>
  {
    return Math.floor(Math.random() * max + min);
  }

  return (
    <div className='mt-5 flex flex-col gap-1'>
      <div onClick={Fight} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Fight</div>
      <div onClick={Flee} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Flee</div>
    </div>
  )
}

export default Actions