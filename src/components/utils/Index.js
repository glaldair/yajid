export const handlePrecio = (precio) => {
    // Si el precio no tiene decimales, se le agrega uno
    if (precio.toString().indexOf(".") === -1) {
        return precio + ".00";
    }
    // Si el precio tiene decimales, se limita a dos decimales
    else {
        return precio.toString().substring(0, precio.toString().indexOf(".") + 3);
    }
}

export const handleClickScroll = () => {
    window.scrollTo(0, 0);
}