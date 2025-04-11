import fetchLeaderboard from './fetchLeaderboard.ts';
import LeaderboardTable from './LeaderboardTable.tsx';
import { PlayerDTO } from './dto/Leaderboard.dto.ts';
import React, { useEffect, useState } from 'react';

const Leaderboard = () => {

  const [globalLeaderboard, setGlobalLeaderboard] = useState<PlayerDTO[]>([]);
  const [globalPage, setGlobalPage] = useState(1);
  const [friendLeaderboard, setFriendLeaderboard] = useState<PlayerDTO[]>([]);
  const [friendPage, setFriendPage] = useState(1);

  const handleGlobalPage = (pageCount: number) => {
    if (globalPage + pageCount > 0) {
      setGlobalPage(globalPage + pageCount);
    }
  }

  const handleFriendPage = (pageCount: number) => {
    if (friendPage + pageCount > 0) {
      setFriendPage(friendPage + pageCount);
    }
  }

  useEffect(() => {
    const fetchData = async (type: string, page: number, setLeaderboard: React.Dispatch<React.SetStateAction<PlayerDTO[]>>) => {
      const data: PlayerDTO[] = await fetchLeaderboard(page, 10, type);
      if (data.length > 0) {
        setLeaderboard(data);
      }
    }
    fetchData('global', globalPage, setGlobalLeaderboard);
    fetchData('friend', friendPage, setFriendLeaderboard);
  }, [globalPage, friendPage]);

  return (
    <div id="leaderboard" className="tabs tabs-lift">
      <label className="tab">
        <input type="radio" name="leaderboard_type" defaultChecked/>
        Global
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <LeaderboardTable leaderboard={globalLeaderboard} page={globalPage} handlePage={handleGlobalPage} />
      </div>
      <label className="tab">
        <input type="radio" name="leaderboard_type" />
        Friends
      </label>
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <LeaderboardTable leaderboard={friendLeaderboard} page={friendPage} handlePage={handleFriendPage} />
      </div>
    </div>
  )
}

export default Leaderboard;