import { Link } from 'react-router-dom';
const NavMenu = () => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/draft">Draft</Link></li>
      <li><Link to="/matchups">Matchups</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
    </>
  )
}

export default NavMenu;