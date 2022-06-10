import { useState } from 'react';

import { useCartContext } from '../context/CartContext';
import FinishModal from './FinishModal';
const Checkout = () => {

    const { cart } = useCartContext();

    // Si no hay productos en el carrito rediriigir a la página principal
    if (cart.length === 0) {
        window.location.href = "/";
    }

    // Si se hace click en el boton de regresar, redirigir a la página productos
    const handleBack = () => {
        window.location.href = "/productos";
    }

    
    
    // Si se hace click en el boton de pagar, se muestra el modal de pago
    const handlePay = (e) => {
        e.preventDefault();
        document.querySelector('.finishModal').classList.add('active');

        // Si se hace click en el boton de regresar, redirigir a la página productos
        setTimeout(() => {
            document.querySelector('.finishModal').classList.remove('active');
            window.location.href = "/productos";
        }, 10000);
    }

    return (
        <>
            <section className="checkout">
                <div className="checkout__header">
                    <h2 className="checkout__header-title"> Rellena el formulario para realizar el pedido </h2>
                </div>
                <div className="checkout__form">
                    <form action="" className="checkout__form-content" onSubmit={handlePay}>
                        <div className="checkout__form-items">
                            <div className="checkout__form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Nombre" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input type="tel" id="phone" name="phone" placeholder="Teléfono" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="address">Dirección</label>
                                <input type="text" id="address" name="address" placeholder="Dirección" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="city">Ciudad</label>
                                <input type="text" id="city" name="city" placeholder="Ciudad" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="state">Estado</label>
                                <input type="text" id="state" name="state" placeholder="Estado" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="zip">Código Postal</label>
                                <input type="text" id="zip" name="zip" placeholder="Código Postal" required />
                            </div>
                            <div className="checkout__form-group">
                                <label htmlFor="message">Descripción</label>
                                <textarea name="message" id="message" placeholder="Te dejamos este espacio para que nos puedas comentar sobre tu pedido" required></textarea>
                            </div>
                        </div>
                        <div className="checkout__form-footer">
                            <button className="checkout__form-button return" onClick={handleBack}>Regresar</button>
                            <button type="reset" className="checkout__form-button reset"> Limpiar </button>
                            <button type="submit" className="checkout__form-button confirm">Realizar pedido</button>
                        </div>
                    </form>
                </div>
            </section>
            <FinishModal />
        </>
    )
}

export default Checkout;