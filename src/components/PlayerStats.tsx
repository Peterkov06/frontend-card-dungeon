import { useSelector } from 'react-redux'
import type { RootState } from '../Data/DataStore'

const PlayerStats = () => {

  const playerHP = useSelector((state:RootState) => state.health.value);
  const playerStrenght = useSelector((state:RootState) => state.strenght.value);
  return (
    <div>
      {playerHP && playerStrenght &&
      <div>
        <p>{Array(playerHP).fill("").map(x => "❤")}</p>
        <p>{Array(playerStrenght).fill("").map(x => "⚔")}</p>
      </div>
      }
    </div>
  )
}

export default PlayerStats