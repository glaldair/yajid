import ImgHeader from '../../../assets/img/static/headerProductos.webp';
import HeaderImg from '../../headers';
import Footer from '../../footer/Index';

import Populares from './Populares';
import Recientes from './Recientes';

const TextoHeader = "Envíos gratis a domicilio a partir de $200 MXN en: Atizapán de Zaragoza, Nicolas Romero y Cuatitlán Izcalli. (Estado de México)."
const Productos = () => {
    return (
        <>
            <HeaderImg img={ImgHeader} title="Productos" texto={TextoHeader} />
            
            {/* Seccion de Productos mas Vendidos */}
            <Populares />

            {/* Seccion de Productos mas recientes */}
            <Recientes />
            
            <Footer />

        </>
    )
}

export default Productos;