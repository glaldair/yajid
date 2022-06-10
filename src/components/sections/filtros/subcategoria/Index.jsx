import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SubNavbar from "../../../navbar/subNavbar/Index";
import SectionCards from "../../productos/SectionCards";
import CardProducto from "../../../cards/Index";
import Footer from "../../../footer/Index";

import { getByDepaAndCatAndSubCat } from "../../../../api/Productos";
const SubCategoria = () => {

    const [ productos, setProductos ] = useState([]);
    const { departamento, categoria, subcategoria } = useParams();

    useEffect(() => {
        getByDepaAndCatAndSubCat(departamento, categoria, subcategoria).then((res) => {
            const productosArray = []
            res.forEach(producto => {
                productosArray.push({ ...producto, id: producto.id })
            });
            setProductos(productosArray);
        }).catch(err => {
            console.log(err);
        });
    }, [departamento, categoria, subcategoria]);

    return (
        <>
            <SubNavbar />
            <SectionCards title={subcategoria}>
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

export default SubCategoria;