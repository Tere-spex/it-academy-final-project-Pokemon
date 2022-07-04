import { useAuth } from "../../context/authContext"

export const Home = () => {
  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout();
  }

  if(loading === true) return <h1>Loading</h1>
  // console.log(user)
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


