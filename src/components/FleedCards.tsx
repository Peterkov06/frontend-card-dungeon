import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../Data/DataStore';
import Card from './Card';
import FleeCard from './FleeCard';

const FleedCards = () => {
    const {fleedCards} = useSelector((state:RootState) => state.deck);
    
  return (
    <div className='flex flex-row gap-2'>
        {fleedCards && fleedCards.map(x => <FleeCard {...x} key={x.cardId}></FleeCard>)}
    </div>
  )
}

export default FleedCards