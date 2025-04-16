import useLeaderboard from './useLeaderboard.ts';
import LeaderboardTable from './LeaderboardTable.tsx';
import NoLeaderboard from './NoLeaderboard.tsx';
import { useState } from 'react';

const Leaderboard = () => {

  const [globalPage, setGlobalPage] = useState(1);
  const [friendPage, setFriendPage] = useState(1);
  const globalLeaderboard = useLeaderboard(globalPage, 10, 'global');
  const friendLeaderboard = useLeaderboard(friendPage, 10, 'friend');
  return (
    <div id="leaderboard" className="tabs tabs-lift">
      <label className="tab">
        <input type="radio" name="leaderboard_type" defaultChecked/>
        Global
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {globalLeaderboard ? <LeaderboardTable leaderboard={globalLeaderboard} page={globalPage} setPage={setGlobalPage} /> :
        <NoLeaderboard />
        }
      </div>
      <label className="tab">
        <input type="radio" name="leaderboard_type" />
        Friends
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {friendLeaderboard ? <LeaderboardTable leaderboard={friendLeaderboard} page={friendPage} setPage={setFriendPage} /> :
        <NoLeaderboard />
        }
      </div>
    </div>
  )
}

export default Leaderboard;