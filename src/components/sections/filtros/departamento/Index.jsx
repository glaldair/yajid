import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SubNavbar from "../../../navbar/subNavbar/Index";
import SectionCards from "../../productos/SectionCards";
import CardProducto from "../../../cards/Index";
import Footer from "../../../footer/Index";

import { getByDepartamento } from "../../../../api/Productos";
const Departamento = () => {

    const [ productos, setProductos ] = useState([]);
    const { departamento } = useParams();

    useEffect(() => {
        getByDepartamento(departamento).then((res) => {
            const productosArray = []
            res.forEach(producto => {
                productosArray.push({ ...producto, id: producto.id })
            });
            setProductos(productosArray);
        }).catch(err => {
            console.log(err);
        });
    }, [departamento]);

    return (
        <>
            <SubNavbar />
            <SectionCards title={departamento}>
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

export default Departamento;