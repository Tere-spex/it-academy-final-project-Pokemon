import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase'

export const authContext = createContext();

// Me creo un Hook personalizado para no tener que importar el useContext y el context en cada componente y en su lugar importar mi hook useAuth
export const useAuth = () => {
  const context =  useContext(authContext)
  if(!context) throw new Error ('Not auth provider')
  return context;
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password); 

    const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    //onAuthStateChanged, me devuelve el Usuario que esta logeado.
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, []);
    
    return (
        <authContext.Provider value={{ signup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}