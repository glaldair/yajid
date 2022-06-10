import { Link } from "react-router-dom";

import { handlePrecio } from "../utils/Index";

import { handleClickScroll } from "../utils/Index";

const CardProducto = ( { producto } ) => {

    const handleTexto = (texto, number) => {
        if (texto.length > number) {
            return texto.substring(0, number) + "...";
        } else {
            return texto;
        }
    }

    return (
        <>
            <Link to={`/productos/${producto.departamento}/${producto.categoria}/${producto.subcategoria}/${producto.codigo}/${producto.nombre}/${producto.id}`} className="cardProducto" onClick={() => handleClickScroll()}>
                <button className="cardProducto__btnFavorito">
                    <i className="fas fa-heart"></i>
                </button>
                <div className="cardProducto__img">
                    <img className="cardProducto__img-img" src={producto.imagen[0]} alt={producto.nombre} />
                </div>
                <div className="cardProducto__info">
                    <h3 className="cardProducto__info-name">
                        {
                            handleTexto(producto.nombre, 20)
                        }
                    </h3>
                    <p className="cardProducto__info-descripcion">
                        {
                            handleTexto(producto.descripcion, 35)
                        }
                    </p>
                    <p className="cardProducto__info-precio">
                        { handlePrecio(producto.precio) }
                        <span className="cardProducto__info-precio-moneda">MXN</span>
                    </p>
                </div>
            </Link>
        </>
    )
}

export default CardProducto;