import { useEffect, useState } from "react";

import CardProducto from "../../../cards/Index";
import SectionCards from "../../productos/SectionCards";

import { getByDepaAndCat } from "../../../../api/Productos";
const Sugerencias = ( { departamento, categoria, id } ) => {

    const [ productos, setProductos ] = useState([]);

    useEffect(() => {
            
        getByDepaAndCat(departamento, categoria).then((res) => {
            (async() => {
                const productosArray = []
                await res.forEach(producto => {
                    productosArray.push({ ...producto, id: producto.id })
                });
                
                // Verificar que el producto que este en pantalla no se muestre en la lista de sugerencias
                const producto = productosArray.find(p => p.id.toString() === id.toString());
                if (producto) {
                    productosArray.splice(productosArray.indexOf(producto), 1);
                }
    
                setProductos(productosArray);
            })()
        }).catch(err => {
            console.log(err);
        });

    }, [departamento, categoria, id]);

    return (
        <>
            <SectionCards title="También te puede interesar">
                <div className="containerCards__four">
                    {productos.map(producto => (
                        <CardProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </SectionCards>
        </>
    )
}

export default Sugerencias;