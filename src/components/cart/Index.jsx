import { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

import Populares from "../sections/productos/Populares";
import Footer from "../footer/Index";
import CartItem from "./CartItem";
import Preview from "./Preview";

const Cart = () => {

    const { cart, deleteCart } = useCartContext();

    const [total, setTotal] = useState(0);

    const handleTotal = async () => {
        let total = 0;
        await cart.map(async item => {
            total += item.subtotal;
        });
        setTotal(total);

        // el cart__modal se le añaade la clase active para que se muestre el modal
        document.querySelector(".cart__modal").classList.add("active");
    }

    // Si le hace click al boton de cancelar al modal se le quita la clase active
    const handleCancel = () => {
        document.querySelector(".cart__modal").classList.remove("active");
    }

    return (
        <>
            <section className="cart">
                <div className="cart__header">
                    <h2 className="cart__header-title">Tu carrito de compras</h2>
                </div>
                {cart.length > 0 ? (
                    <>
                        <div className="cart__body">
                            <div className="cart__body-items">
                                {cart.map((item, index) => (
                                    <CartItem key={index} item={item} />
                                ))}
                            </div>
                            <Preview />
                        </div>
                        <div className="cart__clear">
                            <button className="cart__clear-button" onClick={deleteCart}>Vaciar carrito</button>
                            <button className="cart__clear-button total" onClick={handleTotal}> Calcular total </button>
                        </div>

                        <div className="cart__modal">
                            <div className="cart__modal-content">
                                <h2 className="cart__modal-title"> Llevas un total de: </h2>
                                <p className="cart__modal-total">
                                    <span className="cart__modal-total-number">${total}</span>
                                    <span className="cart__modal-total-moneda">MXN</span>
                                </p>
                                <p className="cart__modal-text"> ¿Deseas continuar con tu compra? </p>
                                <div className="cart__modal-buttons">
                                    <button className="cart__modal-buttons-button cancelar" onClick={handleCancel}> Cancelar </button>
                                    <Link to="/cart/checkout" className="cart__modal-buttons-button chekout"> Ir al checkout </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="cart__empty">
                            <h3 className="cart__empty-title">Tu carrito está vacío</h3>
                            <p className="cart__empty-text">Puedes agregar productos al carrito desde la sección de productos</p>
                            <Link to="/productos" className="cart__empty-button">Ir a productos</Link>
                        </div>
                    </>
                )}
            </section>

            <Populares />

            <Footer />
        </>
    )
}

export default Cart;