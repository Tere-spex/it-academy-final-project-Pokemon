import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {useNavigate} from 'react-router-dom';
import {Alert} from '../Alert/Alert';
import {LoginStyle} from "./Login.styles";
import { Link } from "react-router-dom";
import {LoginNav} from "../LoginNav/LoginNav";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {login} = useAuth(); 
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name] : value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try{
      await login(user.email, user.password);
      navigate('/');
    }catch(error){
      console.log(error.code)
      if (error.code === "auth/weak-password") {
        setError('Password should be at least 6 characters!')
      }else if (error.code === "auth/missing-email") {
        setError("Enter email!")
      }else if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use!")
      }else if (error.code === "auth/invalid-email") {
        setError("Invalid email!")
      }else if(error.code === "auth/internal-error"){
        setError("Enter password!")
      }else if (error.code === "auth/wrong-password") {
        setError("Wrong password!")
      }else if (error.code === "auth/user-not-found") {
        setError("User not found!")
        navigate('/register');
      }else{
        setError(error.message)
      }
    }
  };

  return (
    <>
    <LoginNav />
    <LoginStyle>
      <div className="form-container">
        <div>
          <h2>LOGIN</h2>
          <h3>ENTER YOUR ACOUNT INFORMATION</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} placeholder="youremail@hotmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} placeholder="******" />
          {error && <Alert message={error} />}
          <button>Login</button>
        </form>
        <div className="register-acces">
          <Link to={"/register"}>⚠ If you are not registered yet, create an account!</Link>
        </div>
      </div>
    </LoginStyle>
    </>
    
  )
}


