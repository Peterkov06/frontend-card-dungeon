import { useSelector } from 'react-redux';
import type { RootState } from '../Data/DataStore';
import type { CardType } from '../types/CardType';
import { useEffect, useState } from 'react';
import Actions from './Actions';
import FleeActions from './FleeActions';

const FleeCard = (props: CardType) => {
    const [drawn, setDrawn] = useState(2);
    const [classList,setClassList] = useState("absolute top-18 right-22 z-10 transition-none select-none hidden");

    useEffect(() => {
      switch (drawn) {
        case -1:
          setClassList(`absolute top-18 right-22 z-10 transition-all select-none`);
          drawing();
          break;
        case 0:
          setClassList(`absolute top-18 right-22 z-10 transition-all select-none`);
          drawing();
          break;
        case 1:
          setClassList(`absolute top-23 right-26 z-10 transition-all select-none`);
          break;
        case 2:
          setClassList("absolute top-[25%] left-[25%] transition-all scale-150 z-10 select-none");
          break;
      }
    }, [drawn])
    

    const drawing = async () => 
    {
      if (drawn in [0])
      {
        await new Promise (res => setTimeout(res, 500));
      }
      if (drawn < 2)
      {
        setDrawn(prev => prev + 1);
      }
    }

  return (
    <div className={""} onClick={drawing}>
      { props && 
        <div>
          <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] bg-gray-400 gap-15 z-20 dis' style={{display: drawn === 2 && drawn > 0 ? "none" : "flex"}}>

          </div>
          <div className='flex flex-col justify-center align-middle p-5 border-4 border-cyan-950 rounded-xl w-[10em] h-[16em] bg-white gap-15 z-20' style={{display: drawn > 1 ? "flex" : "none" }}>
            <p className='flex justify-center scale-[400%]'>{props.enemyIcon}</p>
            <div>
              <p>Level: {props.level}</p>
              <p>Reward: {props.reward}</p>
              <p>Penatlty: {props.penalty}</p>
            </div>
          </div>
          <FleeActions currentCardID={props.cardId}></FleeActions>
        </div>
      }
    </div>)   
}

export default FleeCard