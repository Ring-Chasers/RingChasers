import { Link } from 'react-router-dom';
const NavMenu = () => {
  return (
    <>
      <li><Link to="/">Item 1</Link></li>
      <li><Link to="/">Item 2</Link></li>
      <li><Link to="/">Item 3</Link></li>
    </>
  )
}

export default NavMenu;