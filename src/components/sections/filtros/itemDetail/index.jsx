import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import { getProduct } from "../../../../api/Productos";
import SubNavbar from "../../../navbar/subNavbar/Index";
import Quantity from "./Quantity";
import Loading from "../../../load/Loading";
import ButtonsFinish from "./ButtonsFinish";
import Footer from "../../../footer/Index";
import Sugerencias from "./Sugerencias";
import Images from "./Images";
import Mayoreo from "./Mayoreo";

import { useCartContext } from "../../../context/CartContext";
const ItemDetail = () => {

    const { departamento, categoria, id } = useParams();

    const [ producto, setProducto ] = useState({});
    const [ render, setRender ] = useState(false);

    const { cart } = useCartContext();

    useEffect(() => {

        getProduct(id.toString()).then((res) => {
            setProducto(res);
            setRender(true);
        })
        // Si la peticion ya se realizo, no se vuelve a realizar
        if (render) {
            return;
        }
    }, [ render, id ]);

    const onAddToCart = (onAdd) => {
        // console.log(onAdd);
    }

    // Verificar si el producto ya esta en el carrito
    const isInCart = (id) => cart.find(p => p.id.toString() === id.toString());

    return (
        <>
            {render ? (
                <>
                    <SubNavbar />
                    
                    <main className="itemDetail">
                        <Images imagenes={producto.imagen} nombre={producto.nombre} />
                        <div className="itemDetail__details">
                            <div className="itemDetail__details-content">
                                <h2 className="itemDetail__details-name">{producto.nombre}</h2>
                                <p className="itemDetail__details-descripcion">{producto.descripcion}</p>
                                <p className="itemDetail__details-codigo">Código: {producto.codigo}</p>
                                <div className="itemDetail__details-price">
                                    <span className="itemDetail__details-precio">$ {producto.precio}</span>
                                    <span className="itemDetail__details-moneda">MXN</span>
                                </div>
                                <Mayoreo producto={producto} />
                                <div className="itemDetail__details-marca">
                                    <span className="itemDetail__details-marca-title">Marca:</span>
                                    <span className="itemDetail__details-marca-nombre">{producto.marca}</span>
                                </div>
                                <div className="itemDetail__details-stock">
                                    <span className="itemDetail__details-stock-text">Stock:</span>
                                    <span className="itemDetail__details-stock-number">{producto.stock}</span>
                                </div>
                            </div>
                            {/* Si fishShopping es true mostrar el componente */}
                            {isInCart(producto.id) ? (
                                <ButtonsFinish departamento={producto.departamento} />
                            ) : (
                                <Quantity stock={producto.stock} id={producto.id} onAdd={onAddToCart} />
                            )}
                        </div>
                    </main>
                    
                    <section className="itemDetail__info">
                        <div className="itemDetail__info-details">
                            <h3 className="itemDetail__info-title">Detalles</h3>
                            <p className="itemDetail__info-text">{producto.detalles}</p>
                        </div>
                    </section>

                    <Sugerencias departamento={departamento} categoria={categoria} id={producto.id} />
                    
                    <Footer />
                </>
                ) : (
                    <Loading />
            )}
        </>
    )
}

export default ItemDetail;