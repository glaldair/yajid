import { useEffect, useState } from "react";

import SectionCards from "./SectionCards";
import CardProducto from "../../cards/Index";


import { getByVentas } from '../../../api/Productos';
import Loading from "../../load/Loading";
const Populares = () => {

    const [productosVentas, setProductosVentas] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        getByVentas().then(productos => {
            const productosArray = []
            productos.forEach(producto => {
                productosArray.push({ ...producto, id: producto.id })
            });
            setProductosVentas(productosArray);
            setRender(true);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            {render ? (
                <SectionCards title="Top Populares">
                    <div className="containerCards">
                        {productosVentas.map(producto => (
                            <CardProducto key={producto.id} producto={producto} />
                        ))}
                    </div>
                </SectionCards>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Populares;