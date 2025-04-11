type PlayerDTO = {
  id: string;
  name: string;
  points: number;
  wins: number;
}

type HandlePageDTO = (pageCount: number) => void;

export type { PlayerDTO, HandlePageDTO };