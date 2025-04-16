import axios, { AxiosResponse } from 'axios';
import { LeaderboardDTO, PlayerDTO } from './dto/Leaderboard.dto'
import React, { useEffect, useState } from 'react';
const useLeaderboard = (page: number, count: number, type: string) => {
  const [leaderboard, setLeaderboard] = useState<PlayerDTO[]>([]);
  useEffect(() => {
    const fetch = async (page: number, count: number, type: string, setLeaderboard: React.Dispatch<React.SetStateAction<PlayerDTO[]>>) => {
      const response: AxiosResponse<LeaderboardDTO> = await axios.get('/api/leaderboard/' + type, {
        params: {
          page,
          count,
        },
      });
      setLeaderboard(response.data.leaderboard);
    }
    try {
      fetch(page, count, type, setLeaderboard);
    }
    catch (err) {
      console.error(err)
    }
  }, [page, count, type]);

  return leaderboard;
}

export default useLeaderboard;