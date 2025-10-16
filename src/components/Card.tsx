import React from 'react'
import type { CardType } from '../types/CardType'

const Card = (props: CardType) => {
  return (
    <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] gap-4'>
      <p className='scale-[400%] m-5 flex justify-center'>{props.enemyIcon}</p>
      <div>
        <p>Level: {props.level}</p>
        <p>Reward: {props.revard}</p>
        <p>Penatlty: {props.penalty}</p>
      </div>
    </div>
  )     
}

export default Card