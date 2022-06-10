import { Link } from "react-router-dom";

import CartQuantity from "./CartQuantity";

import { useCartContext } from "../context/CartContext";
const CartItem = ({ item }) => {

    const { removeFromCart } = useCartContext();

    return (
        <>
            <div className="cartItem">
                <Link className="cartItem__image" to={`/productos/${item.departamento}/${item.categoria}/${item.subcategoria}/${item.codigo}/${item.nombre}/${item.id}`}>
                    <img loading="lazy" src={item.imagen[0]} alt={item.nombre}/>
                </Link>
                <div className="cartItem__info">
                    <h3 className="cartItem__info-name">{item.nombre}</h3>
                    <p className="cartItem__info-price">${item.precio} MXN</p>
                    <CartQuantity item={item} />
                    <div className="cartItem__info-remove">
                        <button className="cartItem__info-remove-button" onClick={() => removeFromCart(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;