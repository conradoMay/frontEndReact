import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgEscritorio from '../assets/images/image-web-3-desktop.jpg'


export const MainArticle = () => {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imgMobile} />
        <source media="(min-width: 641px)" srcSet={imgEscritorio} />
        <img src={imgMobile} alt="Articulo principal imagen"/>
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>Nuevo Rumbo React 2024</h2>
        </div>
        <div className='flex-1 mt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>Se necesita aprender nuevas tecnologías de desarrollo, para implementar mejoras ante el desarrollo de paginas web. Ahora todo es mas fácil de captar al utilizar componentes y mandar a llamarlos para que se vayan utilizando, segun sean requeridos.</p>
          <button className='bg-SoftRed w-[185px] h-[48px] text-OffWhite uppercase hover:bg-SoftOrange'>Leer más</button>
        </div>
      </div>
    </section>
  )
}