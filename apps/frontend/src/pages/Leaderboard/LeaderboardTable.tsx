import { PlayerDTO } from './dto/Leaderboard.dto';
import handlePage  from '../../utils/handlePage';
const LeaderboardTable = ({ leaderboard, page, setPage } : { leaderboard: PlayerDTO[], page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Rank</th>
            <th className="py-2 px-4 border-b">Player</th>
            <th className="py-2 px-4 border-b">Points</th>
            <th className="py-2 px-4 border-b">Wins</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(( player: PlayerDTO, index: number ) => (
            <tr key={player.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{player.name}</td>
              <td className="py-2 px-4 border-b">{player.points}</td>
              <td className="py-2 px-4 border-b">{player.wins}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="join">
            <button onClick={() => handlePage(page, -1, setPage)} className="join-item btn btn-secondary" disabled={page === 1}>«</button>
            <button className="join-item btn">Page {page}</button>
            <button onClick={() => handlePage(page, 1, setPage)} className="join-item btn btn-secondary">»</button>
        </tfoot>
      </table>
    </div>
  );
}

export default LeaderboardTable;