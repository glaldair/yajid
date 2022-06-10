import { useParams, Link } from "react-router-dom"

const SubNavbar = () => {

    const { departamento, categoria, subcategoria, codigo } = useParams();

    // Si estan todos los parametros, se muestra el subnavbar

    const links = () => {
        if (departamento && categoria && subcategoria && codigo) {
            return(
                <>
                    <div className="subnavbar">
                        <div className="subnavbar__container">
                            <ul className="subnavbar__list">
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to="/productos">Productos /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}`}>{departamento} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}`}>{categoria} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}/${subcategoria}`}>{subcategoria} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}/${subcategoria}/${codigo}`}>{codigo}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        } else if (departamento && categoria && subcategoria) {
            return(
                <>
                    <div className="subnavbar">
                        <div className="subnavbar__container">
                            <ul className="subnavbar__list">
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to="/productos">Productos /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}`}>{departamento} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}`}>{categoria} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}/${subcategoria}`}>{subcategoria}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        } else if (departamento && categoria) {
            return(
                <>
                    <div className="subnavbar">
                        <div className="subnavbar__container">
                            <ul className="subnavbar__list">
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to="/productos">Productos /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}`}>{departamento} /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}/${categoria}`}>{categoria}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        } else if (departamento) {
            return(
                <>
                    <div className="subnavbar">
                        <div className="subnavbar__container">
                            <ul className="subnavbar__list">
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to="/productos">Productos /</Link>
                                </li>
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to={`/productos/${departamento}`}>{departamento}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div className="subnavbar">
                        <div className="subnavbar__container">
                            <ul className="subnavbar__list">
                                <li className="subnavbar__item">
                                    <Link className="subnavbar__link" to="/productos">Productos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    };


    return (
        <>
            {links()}
        </>
    )
}

export default SubNavbar