import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";
import NavbarCart from "./NavbarCart";

import { handleClickScroll } from "../utils/Index";
const NavIcons = () => {

    const { cart } = useCartContext();
    
    // Obtenemos la cantidad de productos que hay en el carrito
    const cartLength = cart.length;

    // Cuando se haga hover en el carrito se muestra el modal navbar__cart con la clase active
    const handleHover = () => {
        document.querySelector(".navbar__cart").classList.add("active");
    }

    // Cuando el mouse se quita del carrito se quita la clase active
    const handleLeave = () => {
        document.querySelector(".navbar__cart").classList.remove("active");
    }

    return (
        <>
            <ul className="navbar__icons-list">
                <li className="navbar__icons-item">
                    <Link className="navbar__icons-link" to="/">
                        <i className="fas fa-heart"></i>
                    </Link>
                </li>
                <li className="navbar__icons-item">
                    <Link className="navbar__icons-link" to="/cart" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClickScroll}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="navbar__icons-cart-price">
                            {cartLength}
                        </span>
                    </Link>
                </li>
            </ul>

            <div className="navbar__cart" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            {/* Si el carrito tiene productos mostrar */}
                {cartLength > 0 ? (
                    <>
                        <div className="navbar__cart-content">
                            <div className="navbar__cart-items">
                                {cart.map((item, index) => (
                                    <NavbarCart key={index} item={item} />
                                ))}
                            </div>
                            <Link to="/cart" className="navbar__cart-button" onClick={handleClickScroll}> Ver carrito </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navbar__cart-content">
                            <p className="navbar__cart-empty">
                                Tu carrito está vacío
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default NavIcons;