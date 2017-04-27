import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <div>
    <h1>Welcome to todoApp</h1>
     <Link to='/Signin' activeClassName='route--active'>
     SignIn
    </Link>
     <Link to='/Register' activeClassName='route--active'>
     Register
    </Link>
  </div>
)

export default Header
