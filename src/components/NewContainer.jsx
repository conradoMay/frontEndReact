import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-GrayisBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4x1 font-bold">NUEVOS ARTÍCULOS</h1>
        <NewArticle
            title='Artículo de Nuevos Productos'
            text='Aquí se muestran la variedad de los nuevos productos que han sido agregados a los catálogos.'
        />
        <NewArticle
            title='Descuentos en Precio de productos'
            text='Tenemos nuevos descuentos de mas de 40% en el precio de todos los productos'
        />
        <NewArticle
            title='Nuevas Membresías para Clientes'
            text='Ahora con la nueva membresía, podrás tener credito de hasta $50,000 mx'
        />
    </aside>
  )
}
