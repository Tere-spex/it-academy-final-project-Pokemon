import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {useNavigate} from 'react-router-dom';
import { RegisterStyle } from "./Register.styles";
import { Alert } from "../Alert/Alert";
import {LoginNav} from "../LoginNav/LoginNav";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {signup} = useAuth(); 
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name] : value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try{
      await signup(user.email, user.password);
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
      }else{
        setError(error.message)
      }
    }
  };

  return (
    <>
    <LoginNav />  
    <RegisterStyle>  
      <div className="form-container">
        <div>
          <h2>REGISTER</h2>
          <h3>CREATE YOUR ACCOUNT</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} placeholder="youremail@hotmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} placeholder="******" />
          {error && <Alert message={error} />}
          <button>Register</button>
        </form>
      </div>
    </RegisterStyle>
    </>
  )
}


