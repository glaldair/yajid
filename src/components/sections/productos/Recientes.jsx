import { useEffect, useState } from "react";

import SectionCards from "./SectionCards";
import CardProducto from "../../cards/Index";

import { getByFecha } from '../../../api/Productos';
const Recientes = () => {

    const [productosRecientes, setProductosRecientes] = useState([]);

    useEffect(() => {
        getByFecha().then(productos => {
            const productosArray = []
            productos.forEach(producto => {
                productosArray.push({ ...producto, id: producto.id })
            });
            setProductosRecientes(productosArray);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <SectionCards title="Top Recientes">
                <div className="containerCards">
                    {productosRecientes.map(producto => (
                        <CardProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </SectionCards>
        </>
    )
}

export default Recientes;