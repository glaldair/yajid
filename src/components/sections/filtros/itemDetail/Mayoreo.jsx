const Mayoreo = ({ producto }) => {
    return (
        <>
            {producto.preciomayoreo ? (
                <>
                    <div className="itemDetail__details-mayoreo">
                        <div className="itemDetail__details-mayoreo-container">
                            <p className="itemDetail__details-mayoreo-title">
                                Cantidad:
                                <span className="itemDetail__details-mayoreo-cantidad">
                                    {producto.cantidadmayoreo}
                                </span>
                            </p>
                            <p className="itemDetail__details-mayoreo-price">
                                $ {producto.preciomayoreo}
                                <span className="itemDetail__details-mayoreo-moneda">MXN</span>
                            </p>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default Mayoreo;