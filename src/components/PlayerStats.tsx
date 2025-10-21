import { useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'

const PlayerStats = () => {

  const playerHP = useSelector((state:RootState) => state.health.value);
  const playerStrenght = useSelector((state:RootState) => state.strenght.value);
  return (
    <div className='select-none scale-125'>
      {playerHP != null && playerStrenght != null &&
      <div>
        <p>{Array(playerHP).fill("").map(x => "❤")}{Array(5 - playerHP).fill("").map(x => "💀")}</p>
        <p>{Array(playerStrenght).fill("").map(x => "⚔")}</p>
      </div>
      }
    </div>
  )
}

export default PlayerStats