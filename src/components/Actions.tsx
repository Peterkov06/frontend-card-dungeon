import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'
import { moveBackInDeck, removeFromDeck, selectCard } from '../Data/DeckSlice';
import { addStrenght, subtractStrenght } from '../Data/StrenghtSlice';
import { addHealth, subtractHealth } from '../Data/HealthSlice';
import { GetRandom } from '../RandomGenerator';

const Actions = () => {

  const disp = useDispatch();
  const {deck, currentCardID} = useSelector((state:RootState) => state.deck);
  const playerHP = useSelector((state:RootState) => state.health.value);
  const playerStrenght = useSelector((state:RootState) => state.strenght.value);

  const Flee = () =>
  {
    disp(moveBackInDeck());
    disp(selectCard());
  }

  const Fight = () =>
  {
    const attackSuccess = GetRandom(1,6);
    let currentEnemy = deck.find(x => x.cardId === currentCardID);
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
      disp(removeFromDeck());
      disp(selectCard());
    }
  }

  return (
    <div className='mt-5 flex flex-col gap-1'>
      <div onClick={Fight} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Fight</div>
      <div onClick={Flee} className='w-40 h-10 border-4 border-cyan-950 bg-cyan-500 text-white rounded-lg font-bold text-lg text-center select-none cursor-pointer'>Flee</div>
    </div>
  )
}

export default Actions