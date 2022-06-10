import { useEffect, useState } from 'react'

const CartQuantity = ({ item }) => {

    let [quantity, setQuantity] = useState(item.cantidad);
    const [total, setTotal] = useState(item.subtotal);
    const setStock = parseInt(item.stock);

    useEffect(() => {
        // Usar el atributo subtotal del producto
        setTotal(item.subtotal);
    }, [item.subtotal]);

    useEffect(() => {
        if (quantity > setStock) {
            setQuantity(setStock);
        }
    }, [setStock, quantity])
    
    const handleChange = (e) => {
        const { value } = e.target;
        if (value.match(/^[0-9]+$/)) {
            setQuantity(value);
        }
        // Si el input tiene un unico valor 0, el valor se pone en 1
        if (value === "0") {
            setQuantity(1);
        }
        // Si el input tiene un valor mayor al stock, el valor se pone en el stock
        if (value >= setStock) {
            setQuantity(setStock);
        }
    }

    const handleClick = (e) => {
        setQuantity(quantity + 1);
        // Si el input tiene un valor mayor o igual al stock, el valor se pone en el stock
        if (quantity >= item.stock) {
            setQuantity(setStock);
        }
        item.cantidad = quantity + 1;
        item.subtotal = parseFloat(item.precio) * parseInt(item.cantidad);
    }

    const handleClick2 = (e) => {
        setQuantity(quantity - 1);
        if (quantity <= 1) {
            setQuantity(1);
        }
        item.cantidad = quantity - 1;
        item.subtotal = parseFloat(item.precio) * parseInt(item.cantidad);
    }

    return (
        <>
            <div className="cartItem__info-quantity">
                <div className="cartItem__info-quantity-container">
                    <button className="cartItem__info-quantity-button" onClick={handleClick2}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <input className="cartItem__info-quantity-input" type="text" value={quantity} onChange={handleChange} />
                    <button className="cartItem__info-quantity-button" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <p className="cartItem__info-total">Total: ${total} MXN</p>
        </>
    )
}

export default CartQuantity;