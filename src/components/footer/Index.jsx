import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__header">
                    <h4 className="footer__header-title"> Super Yajid </h4>
                    <p className="footer__header-subtitle"> Vamos en camino </p>
                    <p className="footer__header-text"> Todo lo que necesitas es amor… Y el delicioso sabor del chicharron. </p>
                    <Link to="/" className="footer__header-link"> Comprar </Link>
                    <div className="footer__header-lists">
                        <ul className="footer__header-list">
                            <li className="footer__header-item">Envíos gratis</li>
                            <li className="footer__header-item">Precios atractivos</li>
                            <li className="footer__header-item">5% de descuento en $1000 de compra</li>
                        </ul>
                        <ul className="footer__header-list">
                            <li className="footer__header-item">Vistas previas</li>
                            <li className="footer__header-item">Vistas previas</li>
                            <li className="footer__header-item">Vistas previas</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__info"></div>
            </footer>
        </>
    )
}

export default Footer;