import { HomeStyle } from './Home.styles';
import {Navbar} from  '../Navbar/Navbar'


export const Home = () => {
  return (
    <>
    <Navbar />
    <HomeStyle>
      <section>
        <h1>Sprint 9</h1>
        <p>This is the sprint number nine, and i wanted to use some funcionalities that we didn't use in previous sprints. This is a pokemon aplication wen you can search the pokemon by name, and the card of the searched pokemon will be desplayed under the search section. You can also select your favorites pokemons and add then to the favorites section. If you decide one of the pokemon didn't like you anymore, you can erase this one of the favorites list. <b>By the way you need to log in the app to have access to the favorites section.</b></p>
      </section>
    </HomeStyle>
    </>
    
  )
}


