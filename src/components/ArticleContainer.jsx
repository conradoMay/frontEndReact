import Pc from '../assets/images/image-retro-pcs.jpg'
import Lap from '../assets/images/image-top-laptops.jpg'
import Juego from '../assets/images/image-gaming-growth.jpg'

import { Article } from "./Article";


export const ArticleContainer = () => {
  return (
    <aside>
        <Article
            image={Pc}
            title='01'
            subtitle='Computadoras.'
            text='Tenemos una gran variedad de equipos de computo.'
        />
        <Article
            image={Lap}
            title='02'
            subtitle='Laptop.'
            text='Los equipos de portátiles, son de alta gama para el usuario.'
        />
        <Article
           image={Juego}
            title='03'
            subtitle='Juegos.'
            text='Videojuegos con equipos de consola de ultima generacion para que tengas la mejor experiencia.'
        />
    </aside>
  )
}