import { Link } from "react-router-dom";

import { handleClickScroll } from "../../../utils/Index";
const ButtonsFinish = ({ departamento }) => {
    return (
        <>
            <div className="quantity">
                <Link to="/cart" className="quantity-button carrito" onClick={handleClickScroll}>Ver carrito</Link>
                <Link to={`/productos/${departamento}`} className="quantity-button comprar" onClick={handleClickScroll}>Seguir comprando</Link>
            </div>
        </>
    )
}

export default ButtonsFinish;