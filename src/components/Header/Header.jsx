import React from 'react';
import { HeaderStyles } from './Header.styles';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
    <HeaderStyles>
       <div className='logo-container'>
       <Link to="/"><p>Poke <br /> App</p></Link>
      </div>
      <div className='login-container'>
      </div>
      <div className='social-container'>
        <img className="socail-icons" src="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg" alt="facebook-icon" />
        <img className="socail-icons" src="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg" alt="twitter-icon" />
        <img className="socail-icons" src="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg" alt="instagram-icon" />
        </div> 
    </HeaderStyles>
    {/* <Navbar /> */}
    </>
    
  )
}