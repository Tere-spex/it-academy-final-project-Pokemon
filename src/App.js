import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Pokemons } from './components/Pokemons/Pokemons';
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pokemons" element={<Pokemons/>} />
      <Route path="*" element={<p>Error 404</p>} />
    </Routes>
   </AuthProvider>
  );
}

export default App;
