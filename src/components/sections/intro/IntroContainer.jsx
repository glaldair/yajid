import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo/logo.png"

const IntroContainer = () => {
    return (
        <>
            <section className="intro">
                <div className="intro__imageBackground">
                    <img className="intro__imageBackground-image" src={Logo} alt="Súper Yajid" />
                </div>
                <div className="intro__header">
                    <h2 className="intro__header-title">Super Yajid</h2>
                    <h3 className="intro__header-slogan">Vámos en camino</h3>

                    <div className="intro__header-buttons">
                        {/* Hacer el llamado a la accion de compra */}
                        <Link to="/productos" className="intro__header-button btn1">
                            Productos
                        </Link>
                        <Link to="/productos/paquetes" className="intro__header-button btn2">
                            Paquetes
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroContainer;