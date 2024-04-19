import menuOculto from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
    <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
            <a href="#">Principal</a>
        </li>
        <li>
            <a href="#">Nuevo</a>
        </li>
        <li>
           <a href="#">Popular</a>
        </li>
        <li>
            <a href="#">Tendencias</a>
        </li>
        <li>
            <a href="#">Categorias</a>
        </li>
    </ul>
    <img className='w.10 h-4 cursor-pointer sm:hidden' src={menuOculto} alt="menuOculto" />
    </>
  )
}