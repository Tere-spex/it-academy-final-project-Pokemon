import { createContext, useContext  } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'

export const authContext = createContext();

// Me creo un Hook personalizado para no tener que importar el useContext y el context en cada componente y en su lugar importar mi hook useAuth
export const useAuth = () => {
  const context =  useContext(authContext)
  if(!context) throw new Error ('Not auth provider')
  return context;
}

export const AuthProvider = ({children}) => {
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password); 

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    
    return (
        <authContext.Provider value={{ signup, login }}>
            {children}
        </authContext.Provider>
    )
}