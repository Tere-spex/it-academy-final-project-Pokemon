import { useAuth } from "../../context/authContext"

export const Home = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div>
      <p>Welcome {user.email}</p>
    </div>
  )
}


