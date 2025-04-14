import { Link } from 'react-router-dom';
const NavMenu = () => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/league">League</Link></li>
      <li><Link to="/league/draft">Draft</Link></li>
      <li><Link to="/league/matchups">Matchups</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/league/start">Start League</Link></li>
    </>
  )
}

export default NavMenu;