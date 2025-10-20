import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'
import { moveBackInDeck, removeFromDeck, selectCard } from '../Data/DeckSlice';

const Actions = () => {

  const disp = useDispatch();

  const Flee = () =>
  {
    disp(moveBackInDeck());
    disp(selectCard());
  }

  return (
    <div className='mt-5 flex flex-col gap-1'>
      <div className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Fight</div>
      <div onClick={Flee} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Flee</div>
    </div>
  )
}

export default Actions