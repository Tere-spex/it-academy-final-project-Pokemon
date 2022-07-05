import { useAuth } from "../../context/authContext"
import { NavbarStyle } from './Navbar.styles';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout();
  }

  if(loading === true) return <h1>Loading</h1>
  // console.log(user)
  return (
    <NavbarStyle>
      <ul>
        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
        <li>Hello, {user.email}!</li>
      </ul>
      <ul>
        <li><Link to="/pokemons">POKEMONS</Link></li>
        <li><Link to="/favorites">FAVORITES</Link></li>
        <button onClick={handleLogout}>LOGOUT</button>
      </ul>
    </NavbarStyle>
  )
}

