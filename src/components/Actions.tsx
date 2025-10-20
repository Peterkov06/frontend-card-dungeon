import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'
import { moveBackInDeck, removeFromDeck, selectCard } from '../Data/DeckSlice';
import { modifyHealthByValue } from '../Data/HealthSlice';
import { modifyStrenghtByValue } from '../Data/StrenghtSlice';

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
    const attackSuccess = RollTheDice(1,12);
    let currentEnemy = deck[0];
    if (attackSuccess > currentEnemy.level)
    {
      for (let y = 0; y < currentEnemy.reward.length; y++) {
        if (currentEnemy.reward[y] === "❤")
        {
          disp(modifyHealthByValue(1));
        }
        else if (currentEnemy.reward[y] === "⚔")
        {   
          disp(modifyStrenghtByValue(1));
        }
      }
    }
    else
    {
      for (let index = 0; index < currentEnemy.penalty.length; index++) {
        if (currentEnemy.penalty[index] === "❤")
        {
          disp(modifyHealthByValue(-1));
        }
        else if (currentEnemy.penalty[index] === "⚔")
        {   
          disp(modifyStrenghtByValue(-1));
        }
        }
    }
    disp(removeFromDeck());
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