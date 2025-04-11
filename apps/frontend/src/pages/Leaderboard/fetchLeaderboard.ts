import axios, { AxiosResponse } from 'axios';
import { LeaderboardDTO } from './dto/Leaderboard.dto'
const fetchLeaderboard = async (page: number, count: number, type: string) => {
  const leaderboard: AxiosResponse<LeaderboardDTO> = await axios.get('/api/leaderboard/' + type, {
    params: {
      page,
      count,
    },
  });
  return leaderboard.data.leaderboard;
}

export default fetchLeaderboard;