import { HomeStyle } from './Home.styles';
import {Navbar} from  '../Navbar/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar />
    <HomeStyle>
      <section>
        <h1>Sprint 9</h1>
        <p>This App consists of 4 pages: Home, Login, Register and pokemons which is the main component here you can see the pokemon cards.</p>
        <p>This is a pokemon aplication wen you can search the pokemon by name, and the card of the searched pokemon will be desplayed under the search section.</p>
      </section>
    </HomeStyle>
    </>
  )
}


