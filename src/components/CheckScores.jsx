import React from 'react'
import { useGameStore } from '../stores/gameStore';
import { useSettingStore } from '../stores/settingsStore';

export const CheckScores = (playerId) => {
    const players = useGameStore((s) => s.players);
    const settings = useSettingStore((s) => s.settings);

    console.log(players);
    console.log(settings);

    if (playerId.score >= settings.scoreGoal) {
        /* Check other players scores for match and wwho has the highest.*/
        console.log("Player has more than goalscore.")
    }

  return (
    <div>CheckScores</div>
  )
}
