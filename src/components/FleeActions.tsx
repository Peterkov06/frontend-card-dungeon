import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'
import { removeFromFleed, selectCard } from '../Data/DeckSlice';
import { addStrenght, subtractStrenght } from '../Data/StrenghtSlice';
import { addHealth, subtractHealth } from '../Data/HealthSlice';
import { GetRandom } from '../RandomGenerator';

const FleeActions = (props: {currentCardID: string}) => {

  const disp = useDispatch();
  const {fleedCards} = useSelector((state:RootState) => state.deck);
  const playerStrenght = useSelector((state:RootState) => state.strenght.value);

  const Fight = () =>
  {
    const attackSuccess = GetRandom(1,6);
    let currentEnemy = fleedCards.find(x => x.cardId === props.currentCardID);
    if (currentEnemy)
    {
      if (attackSuccess + playerStrenght > currentEnemy.level)
      {
        for (let y = 0; y < currentEnemy.reward.length; y++) {
          if (currentEnemy.reward[y] === "❤")
          {
            disp(addHealth(1));
          }
          else if (currentEnemy.reward[y] === "⚔")
          {   
            disp(addStrenght(1));
          }
        }
      }
      else
      {
        for (let index = 0; index < currentEnemy.penalty.length; index++) {
          if (currentEnemy.penalty[index] === "❤")
          {
            disp(subtractHealth(1));
          }
          else if (currentEnemy.penalty[index] === "⚔")
          {   
            disp(subtractStrenght(1));
          }
          }
      }
      disp(removeFromFleed(props.currentCardID));
    }
  }

  return (
    <div className='mt-5 flex flex-col gap-1'>
      <div onClick={Fight} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Fight</div>
    </div>
  )
}

export default FleeActions