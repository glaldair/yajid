const NavbarCart = ({ item }) => {
    return (
        <>
            <div className="navbarCart">
                <div className="navbarCart__image">
                    <img src={item.imagen[0]} alt={item.nombre} />
                </div>
                <div className="navbarCart__info">
                    <div className="navbarCart__info-text">
                        <p className="navbarCart__info-name">{item.nombre}</p>
                        <p className="navbarCart__info-price">${item.precio}</p>
                    </div>
                    <div className="navbarCart__info-quantity">
                        <p className="navbarCart__info-cantidad">Cantidad: {item.cantidad}</p>
                        <p className="navbarCart__info-total">Total: ${item.subtotal}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarCart;