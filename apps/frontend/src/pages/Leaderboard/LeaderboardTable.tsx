import { PlayerDTO, HandlePageDTO } from './dto/Leaderboard.dto';

const LeaderboardTable = ({ leaderboard, page, handlePage } : { leaderboard: PlayerDTO[], page: number, handlePage: HandlePageDTO}) => {

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
            <button onClick={() => handlePage(-1)} className="join-item btn btn-secondary" disabled={page === 1}>«</button>
            <button className="join-item btn">Page {page}</button>
            <button onClick={() => handlePage(1)} className="join-item btn btn-secondary">»</button>
        </tfoot>
      </table>
    </div>
  );
}

export default LeaderboardTable;