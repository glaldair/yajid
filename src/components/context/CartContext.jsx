import { useState, createContext, useContext } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const isInCart = (id) => cart.find(p => p.id.toString() === id.toString());
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart];
        const inCart = isInCart(producto.id);

        if (inCart) {
            newCart[newCart.indexOf(inCart)].cantidad += cantidad;
            // Creamos una propiedad subtotal para el producto
            newCart[newCart.indexOf(inCart)].subtotal = newCart[newCart.indexOf(inCart)].cantidad * newCart[newCart.indexOf(inCart)].precio;

            setCart(newCart);
            return
        }

        producto.cantidad = cantidad;
        producto.subtotal = producto.cantidad * producto.precio;
        setCart([...newCart, producto]);
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const inCart = isInCart(id);

        if (inCart) {
            newCart.splice(newCart.indexOf(inCart), 1);

            setCart(newCart);
            return
        }

        setCart(newCart);
    }
    const deleteCart = () => setCart([]);
    return(
        <>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;