import { Routes, Route } from 'react-router-dom';
import {Header} from './components/Header/Header'
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Pokemons } from './components/Pokemons/Pokemons';
import {Footer} from './components/Footer/Footer'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <>
    <Header />
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/pokemons" element={<ProtectedRoute><Pokemons/></ProtectedRoute>} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </AuthProvider>
    <Footer />
    </>
    
  );
}

export default App;
