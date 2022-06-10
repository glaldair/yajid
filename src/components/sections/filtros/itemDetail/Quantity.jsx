import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import { useAppContext } from "../../../context/AppContext";

const Quantity = ({ stock, id, onAdd }) => {

    const [ cantidad, setCantidad ] = useState(1);
    const { addToCart } = useCartContext();
    const { productos } = useAppContext();
    const setStock = parseInt(stock);

    // Validar que solo se puedan ingresar numeros
    const handleChange = (e) => {
        const { value } = e.target;
        if (value.match(/^[0-9]+$/)) {
            setCantidad(value);
        }
        // Si el input tiene un unico valor 0, el valor se pone en 1
        if (value === "0") {
            setCantidad(1);
        }
        // Si el input tiene un valor mayor al stock, el valor se pone en el stock
        if (value > setStock) {
            setCantidad(setStock);
        }
    }
    
    const handleClick = (e) => {
        setCantidad(cantidad + 1);
        // Si el input tiene un valor mayor o igual al stock, el valor se pone en el stock
        if (cantidad >= stock) {
            setCantidad(setStock);
        }
    }

    const handleClick2 = (e) => {
        setCantidad(cantidad - 1);
        if (cantidad <= 1) {
            setCantidad(1);
        }
    }

    const handleClickAddToCart = (id, cantidad) => {
        const producto = productos.find(p => p.id.toString() === id.toString());
        addToCart(producto, cantidad);
        onAdd(cantidad);
    }

    return (
        <>
            <div className="quantity">
                <div className="quantity-input">
                    <button className="quantity-input-button" onClick={handleClick2}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <input type="text" id="cantidad" className="quantity-input-number" value={cantidad} onChange={handleChange} />
                    <button className="quantity-input-button" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
                <button className="quantity-button" onClick={() => handleClickAddToCart(id, cantidad)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Quantity;