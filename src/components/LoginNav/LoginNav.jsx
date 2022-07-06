import React from 'react'
import { Link } from 'react-router-dom'
import { LoginNavStyle } from './LoginNav.styles'

export const LoginNav = () => {
  return (
    <LoginNavStyle>
    <ul>
      <li><Link to={'/login'}>LOGIN</Link></li>
      <li><Link to={'/register'}>REGISTER</Link></li>
    </ul>
  </LoginNavStyle>
  )
}

