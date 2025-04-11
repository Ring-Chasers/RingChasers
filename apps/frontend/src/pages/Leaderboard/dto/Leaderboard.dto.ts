
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

type HandlePageDTO = (pageCount: number) => void;

export type { PlayerDTO, HandlePageDTO, LeaderboardDTO };