import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SubNavbar from "../../../navbar/subNavbar/Index";
import SectionCards from "../../productos/SectionCards";
import CardProducto from "../../../cards/Index";
import Footer from "../../../footer/Index";

import { getByDepaAndCat } from "../../../../api/Productos";
const Categoria = () => {

    const [ productos, setProductos ] = useState([]);
    const { departamento, categoria } = useParams();

    useEffect(() => {
        getByDepaAndCat(departamento, categoria).then((res) => {
            const productosArray = []
            res.forEach(producto => {
                productosArray.push({ ...producto, id: producto.id })
            });
            setProductos(productosArray);
        }).catch(err => {
            console.log(err);
        });
    }, [departamento, categoria]);


    return (
        <>
            <SubNavbar />
            <SectionCards title={categoria}>
                <div className="containerCards">
                    {productos.map(producto => (
                        <CardProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </SectionCards>

            <Footer />
        </>
    )
}

export default Categoria;