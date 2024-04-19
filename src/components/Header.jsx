import {NavBar} from './NavBar'

import logo from '../assets/images/logo.svg'


export const Header = () => {
  return (
    <header className='bg-yellow-100 flex place-content-between items-center'>
        <img src={logo} alt='logo'/>
        <NavBar />
    </header>
  )
}