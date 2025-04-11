import axios from 'axios';

const fetchLeaderboard = async (page: number, count: number, type: string) => {
  const leaderboard = await axios.get('/api/leaderboard/' + type, {
    params: {
      page,
      count,
    },
  });
  return leaderboard.data;
}

export default fetchLeaderboard;