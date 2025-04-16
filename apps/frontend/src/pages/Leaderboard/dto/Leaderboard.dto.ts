
type PlayerDTO = {
  id: string;
  name: string;
  points: number;
  wins: number;
}

type LeaderboardDTO = {
  leaderboard: PlayerDTO[];
  page: number;
  count: number;
}

export type { PlayerDTO, LeaderboardDTO };